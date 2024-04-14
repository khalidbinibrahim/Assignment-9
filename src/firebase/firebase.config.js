// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaFsRZsqauPcZV3IjJDxoTYuj3ziWiVvM",
  authDomain: "khalid-bin-ibrahim-a9.firebaseapp.com",
  projectId: "khalid-bin-ibrahim-a9",
  storageBucket: "khalid-bin-ibrahim-a9.appspot.com",
  messagingSenderId: "699067170266",
  appId: "1:699067170266:web:19914a2f3aa8e94323d4e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);