// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBYqNPIyvxTMktnaSer4M6cGl5iJr--6_k",
  authDomain: "vaccinize-dc2bf.firebaseapp.com",
  projectId: "vaccinize-dc2bf",
  storageBucket: "vaccinize-dc2bf.appspot.com",
  messagingSenderId: "861955042283",
  appId: "1:861955042283:web:58532ebdda08a2836447ae",
  measurementId: "G-P8BM4PZVN0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
