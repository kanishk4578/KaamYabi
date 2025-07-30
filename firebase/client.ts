// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd-Fz2wKYyy0Q64-jZVfgg-Gjg7NoVq5M",
  authDomain: "prepwise-79b8c.firebaseapp.com",
  projectId: "prepwise-79b8c",
  storageBucket: "prepwise-79b8c.appspot.com", // <-- fix here
  messagingSenderId: "29453821971",
  appId: "1:29453821971:web:1b8a46e891f7b5786477e6",
  measurementId: "G-Z0SGZHPBYT"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);