// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkMKVZNlGgwUqKimSowRHgli5L9DUcVEQ",
  authDomain: "reactjsauth-16fc1.firebaseapp.com",
  projectId: "reactjsauth-16fc1",
  storageBucket: "reactjsauth-16fc1.appspot.com",
  messagingSenderId: "800974983692",
  appId: "1:800974983692:web:19669c7fc9b5f94b5dd429",
  measurementId: "G-B24BTNTKHW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
