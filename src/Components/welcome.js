import {auth} from '../firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="welcome">
      <h2>
        Hello friends.<br/> Welcome to the chat! <br/>
        Here are the chat rules: <br/>
          Only english is allowed<br/>
          Chats will be deleted after 24 hours<br/>
          This is a safe learning space for everyone!
      </h2>
      <p>Sign in with Google to chat with with your fellow english practitioners.</p>
      <button className="sign-in" onClick={googleSignIn}>
      </button>
    </main>
  );
};
export default Welcome;