import {auth} from '../firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import login from './login.png'

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="welcome">
      <h2>
        Hello friends! Welcome to the chat :{")"} <br/>
        Here are the chat rules: <br/><br/>
          1. Only english is allowed<br/>
          2. Chats will be deleted after 24 hours<br/>
          {"("}Or it would be if I bought the firebase blaze subscription{")"}
          <br/><br/>
        This is a safe learning space for everyone!
      </h2>
      <p>Sign in with Google to chat with with your fellow english practitioners :D</p>
      <img src={login} onClick={googleSignIn}>
      </img>
    </main>
  );
};
export default Welcome;