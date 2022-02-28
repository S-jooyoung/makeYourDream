//Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

// My web app's Firebase configureation
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_ID,
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
