import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginvirtualcourses-9b403.firebaseapp.com",
  projectId: "loginvirtualcourses-9b403",
  storageBucket: "loginvirtualcourses-9b403.firebasestorage.app",
  messagingSenderId: "341124191590",
  appId: "1:341124191590:web:28ca41f0f6aeda239524a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}