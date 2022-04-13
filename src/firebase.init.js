// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxABof_Ibp9_cTIw2ar2cAsCUke4NAAlI",
    authDomain: "genius-car-services-4b4a1.firebaseapp.com",
    projectId: "genius-car-services-4b4a1",
    storageBucket: "genius-car-services-4b4a1.appspot.com",
    messagingSenderId: "971564494043",
    appId: "1:971564494043:web:f04ad3dd1e7c66190770fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;