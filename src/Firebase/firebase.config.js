// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-2NnA6LpqzQpg6uwK_jr5dlbyrI9uT-U",
    authDomain: "prms-web-app.firebaseapp.com",
    projectId: "prms-web-app",
    storageBucket: "prms-web-app.firebasestorage.app",
    messagingSenderId: "272343514272",
    appId: "1:272343514272:web:4761b99fe2ad339d861dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);