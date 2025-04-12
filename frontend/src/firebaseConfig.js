import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project configuration (use environment variables for security)
const firebaseConfig = {
  apiKey: "AIzaSyDx_faePngq-wfHcJpY7JkjcbO3U3uR1C4",  // API key should be a string
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,  // Environment variable for Firebase Auth Domain
  projectId: "portfolio-website-builde-8a6d2",  // Make sure projectId is a string
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,  // Environment variable for Firebase Storage Bucket
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,  // Environment variable for Firebase Messaging Sender ID
  appId: "1:133062310320:web:15c2ab12d417ab7a93be75",  // App ID as a string
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
