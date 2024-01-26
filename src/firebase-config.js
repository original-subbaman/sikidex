// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRTVhcc5b15nRh3dS7VS_EUzjqk-e7uJY",
  authDomain: "sikidex.firebaseapp.com",
  projectId: "sikidex",
  storageBucket: "sikidex.appspot.com",
  messagingSenderId: "107382692810",
  appId: "1:107382692810:web:e5a5bd0b9cd10d31ce4d33",
  measurementId: "G-YE9SZ0PDJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore();
