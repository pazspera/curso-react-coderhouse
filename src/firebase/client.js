import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyAkkO8WxnmTybxytHTWGhouQeZIXnMnvUo",
    authDomain: "react-ecommerce-7d5b4.firebaseapp.com",
    projectId: "react-ecommerce-7d5b4",
    storageBucket: "react-ecommerce-7d5b4.firebasestorage.app",
    messagingSenderId: "388424561525",
    appId: "1:388424561525:web:dd7d60041761910e04d93c"

};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

