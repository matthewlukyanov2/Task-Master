import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASQ95pUp3t_8JkZASqbWdxjTNr8xRaKEY",
  authDomain: "taskmaster-e39a3.firebaseapp.com",
  projectId: "taskmaster-e39a3",
  storageBucket: "taskmaster-e39a3.firebasestorage.app",
  messagingSenderId: "979101257846",
  appId: "1:979101257846:web:afeaca9ac0d15d8b508f57",
  measurementId: "G-K3LG58GGJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // key
export { auth };
