import {initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmGnuxcJEYdh0s4t9ggVy0yBokjYFt6uo",
    authDomain: "cprg306-assignments-6aacf.firebaseapp.com",
    projectId: "cprg306-assignments-6aacf",
    storageBucket: "cprg306-assignments-6aacf.firebasestorage.app",
    messagingSenderId: "578161291248",
    appId: "1:578161291248:web:68f020e5450ef557d0f735"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);