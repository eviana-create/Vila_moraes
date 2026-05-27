import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeLLm4cisEffXr0-LOnVcsrJr0lr-xpyU",
  authDomain: "site-comunidade-93ff6.firebaseapp.com",
  projectId: "site-comunidade-93ff6",
  storageBucket: "site-comunidade-93ff6.firebasestorage.app",
  messagingSenderId: "497524686496",
  appId: "1:497524686496:web:47a2eebbe1a64e679c53c5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);