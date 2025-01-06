// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvIlaRASvPPLoh5-i_xhacEkdssKxXlwY",
  authDomain: "bjjapp-a543f.firebaseapp.com",
  projectId: "bjjapp-a543f",
  storageBucket: "bjjapp-a543f.firebasestorage.app",
  messagingSenderId: "968399750311",
  appId: "1:968399750311:web:74673daea94d4f33834782",
  measurementId: "G-FSGQGL9309"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)