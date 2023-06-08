import React, {useState} from 'react';
import {auth, db} from '../firebase/firebase';
import {addDoc, collection, serverTimestamp} from 'firebase/firestore';
//import Grammar from './grammar'

const SendMessage = ({scroll}) => {

    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();
        if(message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const {uid, displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db, "messages"),{
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid
        });

        setMessage("");
        scroll.current.scrollIntoView({behavior: "smooth"});
    }

    return(
        <div>
        <form className = "send-message" onSubmit={(event) => sendMessage(event)}>
            <input
            id="messageInput"
            name="messageInput"
            type="text"
            className="form-input_input"
            placeholder="type message..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            autoComplete="off"
            />
            <button type="submit">Send</button>
        </form>
        
        {/*<Grammar message={message}/> --- Not working, error 500*/}
        </div>
    )
};

export default SendMessage;

//gets message and sends it