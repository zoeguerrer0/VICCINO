// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
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

const app = initializeApp(firebaseConfig);
const auth =getAuth (app);//maneja la autenticacion del usuario

// Initialize Firebase
const analytics = getAnalytics(app);
export default {auth};//acá se ingresan los componentes/ funciones que se deseen utilizar  en otros archivos