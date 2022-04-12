// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBMxGIhNQrhYpT83a-Am0Ks76iPOdD0vk",
    authDomain: "ema-john-simple-3c8d0.firebaseapp.com",
    projectId: "ema-john-simple-3c8d0",
    storageBucket: "ema-john-simple-3c8d0.appspot.com",
    messagingSenderId: "434520956739",
    appId: "1:434520956739:web:bc2510db24b11b4939d9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;