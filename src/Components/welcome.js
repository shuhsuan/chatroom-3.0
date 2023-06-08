import {auth} from '../firebase/firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

  return (
    <main className="welcome">
      <h2>Welcome to the chat room, this is an english-only typing zone.</h2>
      <p>Sign in with Google to chat with with your fellow english practitioners.</p>
      <button className="sign-in" onClick={googleSignIn}>
      </button>
    </main>
  );
};
export default Welcome;