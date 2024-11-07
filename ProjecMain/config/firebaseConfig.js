// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA09Cwh_qwZUHQpN8g3qSbC1tnjFcifn0g",
  authDomain: "projecmain.firebaseapp.com",
  projectId: "projecmain",
  storageBucket: "projecmain.firebasestorage.app",
  messagingSenderId: "673856902327",
  appId: "1:673856902327:web:a5dc55f89151514bb3a932",
  measurementId: "G-SG7D4XP2J1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);