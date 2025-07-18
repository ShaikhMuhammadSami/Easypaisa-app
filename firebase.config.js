// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2DKlDlAyrEDqS9dPFbMHZInQkc4puQjw",
  authDomain: "easypaisa-auth.firebaseapp.com",
  projectId: "easypaisa-auth",
  storageBucket: "easypaisa-auth.firebasestorage.app",
  messagingSenderId: "898529940061",
  appId: "1:898529940061:web:5678fb5e41eb328ada33b4",
  measurementId: "G-XC5WBJP866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);