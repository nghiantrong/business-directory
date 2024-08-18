// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO1b3MZLWvE2vXModk3skRv04V2yy8qiE",
  authDomain: "react-native-businessdirectory.firebaseapp.com",
  projectId: "react-native-businessdirectory",
  storageBucket: "react-native-businessdirectory.appspot.com",
  messagingSenderId: "847164692515",
  appId: "1:847164692515:web:2681630cb4fbc2f0e07996",
  measurementId: "G-KER1F6H3Q2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

const analytics = getAnalytics(app);