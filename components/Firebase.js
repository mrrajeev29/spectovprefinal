// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAOVNlKG8SsSN9qDNAzQhtME0r0vAikCM",
  authDomain: "spectov-6b779.firebaseapp.com",
  projectId: "spectov-6b779",
  storageBucket: "spectov-6b779.appspot.com",
  messagingSenderId: "45968482858",
  appId: "1:45968482858:web:abf788a1cb3ac4f7841953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export const db=getFirestore(app);
 export default app;