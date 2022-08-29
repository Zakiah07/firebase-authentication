import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV_TV3fCr7-GwJbTkXkPZCRQEV4sXf2B0",
  authDomain: "fir-tutorial-9a1ed.firebaseapp.com",
  databaseURL:
    "https://fir-tutorial-9a1ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-tutorial-9a1ed",
  storageBucket: "fir-tutorial-9a1ed.appspot.com",
  messagingSenderId: "295624065615",
  appId: "1:295624065615:web:40a3ee24a17c0eb51ae03a",
  measurementId: "G-7E7K99B43B",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
