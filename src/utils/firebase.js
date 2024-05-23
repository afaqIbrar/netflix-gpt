// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoWAIcEKj4fCnxx__7bX_ebSMuiSC2KVQ",
    authDomain: "netflixgpt-2fd46.firebaseapp.com",
    projectId: "netflixgpt-2fd46",
    storageBucket: "netflixgpt-2fd46.appspot.com",
    messagingSenderId: "961802806638",
    appId: "1:961802806638:web:f1f7ef07064b74f7c80d7f",
    measurementId: "G-4DW6M1R9KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);