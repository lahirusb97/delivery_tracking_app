// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSE3wbk-bbR6X_sZbGk3nqOT8KKavp5wE",
  authDomain: "armair-7e8b8.firebaseapp.com",
  projectId: "armair-7e8b8",
  storageBucket: "armair-7e8b8.appspot.com",
  messagingSenderId: "255019274248",
  appId: "1:255019274248:web:00b7a292cfd581b1b801bd",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
