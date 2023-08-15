// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5nWtixNF0caEImTCGP1vFfdMSlwdv81U",
  authDomain: "blogapp-fd0ce.firebaseapp.com",
  projectId: "blogapp-fd0ce",
  storageBucket: "blogapp-fd0ce.appspot.com",
  messagingSenderId: "791597690052",
  appId: "1:791597690052:web:a99850ffc963a0c80ded91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;