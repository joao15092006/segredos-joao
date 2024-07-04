// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC35aQQ8uqYGPy0s6fz2g2zbIjxX1pFD80",
  authDomain: "nocigilo.firebaseapp.com",
  projectId: "nocigilo",
  storageBucket: "nocigilo.appspot.com",
  messagingSenderId: "882581983834",
  appId: "1:882581983834:web:5457b0efa7cf637ad0be63",
  measurementId: "G-YYJ81QPKEJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

export {app}
