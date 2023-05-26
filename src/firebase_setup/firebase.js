// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2yjGgp00iqCwaRbYQjwtbXCFgHoZVdEA",
  authDomain: "chatroom-3-0.firebaseapp.com",
  projectId: "chatroom-3-0",
  storageBucket: "chatroom-3-0.appspot.com",
  messagingSenderId: "51397731162",
  appId: "1:51397731162:web:e8cd33b855d3d90637c963",
  measurementId: "G-750TMV5RQS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);