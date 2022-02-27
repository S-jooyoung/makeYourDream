//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalyics } from "firebase/analytics";

// My web app's Firebase configureation
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  projectId: REACT_APP_FIREBASE_ID,
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalyics(App);

export default firebaseApp;
