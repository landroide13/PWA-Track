
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js'

const firebaseConfig = {
  apiKey: "AIzaSyCBFXs-j6r0tz84WN0s3xMFiyeNcWGn2K0",
  authDomain: "firedatabase-d33cf.firebaseapp.com",
  projectId: "firedatabase-d33cf",
  storageBucket: "firedatabase-d33cf.appspot.com",
  messagingSenderId: "579926111962",
  appId: "1:579926111962:web:7dc111bbc84854c39757e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
















