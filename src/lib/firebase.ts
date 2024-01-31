// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBdiK8CPhKq9ijdo5cOc4iYv0SU8eVj20",
    authDomain: "brewlistdemo.firebaseapp.com",
    projectId: "brewlistdemo",
    storageBucket: "brewlistdemo.appspot.com",
    messagingSenderId: "477223573943",
    appId: "1:477223573943:web:6c62d8591d6af10af3b032",
    measurementId: "G-2TM914LX90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
const analytics = getAnalytics(app);
