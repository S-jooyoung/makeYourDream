//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// My web app's Firebase configureation
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
};

//Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
