import React, { useState } from "react";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import getGrammar from './grammarAPI'

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");
  const [correction, setCorrection] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      //prevents empty message
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });

    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = async () => {
    const response = await getGrammar(message) //post message to api and receive corrected grammar back in promise
    setCorrection(response.data.correction);
}

  return (
    <div>
        <div className="correction">
          {correction}
            <button id="grammar-butt" onClick={handleClick}>Check grammar</button>
            </div>

      <form className="send-message" onSubmit={(event) => sendMessage(event)}>
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input_input"
          placeholder="type message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;

//gets message and sends it
