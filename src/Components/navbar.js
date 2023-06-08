import React from "react";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Chatroom</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign out
        </button>
      ) : (
        <button className="sign-in" onClick={googleSignIn}>
          Sign In
        </button>
      )}
    </nav>
  );
};

export default NavBar;

//authentication 