// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcx-9oO3CYlRknt8EV2bQIIRi3-oFLydw",
    authDomain: "a2fuegos-e-commerce.firebaseapp.com",
    projectId: "a2fuegos-e-commerce",
    storageBucket: "a2fuegos-e-commerce.appspot.com",
    messagingSenderId: "894773318500",
    appId: "1:894773318500:web:c38f892f3677857fe96071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;