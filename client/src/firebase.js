// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-48066.firebaseapp.com",
  projectId: "mernestate-48066",
  storageBucket: "mernestate-48066.appspot.com",
  messagingSenderId: "814567138558",
  appId: "1:814567138558:web:8b56a7d219b851eb24f1af"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);