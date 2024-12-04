// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmuOTEKBW04gypvBFSU2Qvj6Mwuh4SmLw",
  authDomain: "hackathon-7c43f.firebaseapp.com",
  projectId: "hackathon-7c43f",
  storageBucket: "hackathon-7c43f.firebasestorage.app",
  messagingSenderId: "784859553083",
  appId: "1:784859553083:web:4c4c21dc07cc418914ab1e",
  measurementId: "G-K27GPBYGHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);