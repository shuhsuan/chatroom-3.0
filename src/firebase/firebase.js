import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { API_KEY_FIREBASE } from "../config";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: API_KEY_FIREBASE,
  authDomain: "chat-master-1f4de.firebaseapp.com",
  projectId: "chat-master-1f4de",
  storageBucket: "chat-master-1f4de.appspot.com",
  messagingSenderId: "873802320251",
  appId: "1:873802320251:web:eeb3b2a65501cee88d55de",
  measurementId: "G-MXMDQ77JH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize cloud firestore 
export const db = getFirestore(app);

//Initialize authentication
export const auth = getAuth(app);


