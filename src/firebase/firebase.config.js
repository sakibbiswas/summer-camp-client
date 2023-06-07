// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
    // apiKey: "AIzaSyCVt1SWe577nzaqrkCzKQswM3b11jUYzis",
    // authDomain: "summer-camp-client-db0ed.firebaseapp.com",
    // projectId: "summer-camp-client-db0ed",
    // storageBucket: "summer-camp-client-db0ed.appspot.com",
    // messagingSenderId: "151816665729",
    // appId: "1:151816665729:web:d37efafe4b3edae9d46b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;