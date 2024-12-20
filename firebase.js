// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Para Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkqiyx2688bazwJBsZkrlKv9ORdq43gs",
  authDomain: "vicino-app-e79a3.firebaseapp.com",
  projectId: "vicino-app-e79a3",
  storageBucket: "vicino-app-e79a3.firebasestorage.app",
  messagingSenderId: "504225875718",
  appId: "1:504225875718:web:842149cf53ac219fa3c087",
  measurementId: "G-62P3YBPX7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Inicializar Auth
const auth = getAuth(app);
// Inicializar Firestore
const db = getFirestore(app); // Para Firestore


export { auth, db }; // o export { auth, database } si usas Realtime Database