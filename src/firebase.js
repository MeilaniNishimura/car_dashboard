// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfcNvTzwy4ymHIW74gZB3dGYUoQ91sqk",
  authDomain: "reactbook-c0a6d.firebaseapp.com",
  projectId: "reactbook-c0a6d",
  storageBucket: "reactbook-c0a6d.appspot.com",
  messagingSenderId: "906229984194",
  appId: "1:906229984194:web:38f4e58b6e298b4d57845b"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;
