 // Import the features you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics  } from "firebase/analytics";
 import { getAuth  } from 'firebase/auth';

 // Your configuration of Firebase
 const firebaseConfig = {
     apiKey: "AIzaSyAD7GoKp-vYt2F_FLGrJ8ak1Bre_NYnupc",
     authDomain: "react-login-app-fab14.firebaseapp.com",
     projectId: "react-login-app-fab14",
     storageBucket: "react-login-app-fab14.appspot.com",
     messagingSenderId: "177371042958",
     appId: "1:177371042958:web:b087316fe10f9fdd8de5df",
     measurementId: "G-B4NF5R4C8K"
 };

 // initialize firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app); // Correct here

 export default auth;
