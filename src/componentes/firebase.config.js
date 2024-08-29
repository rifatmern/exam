// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp6f7qF2K7deabm884MtESstYerDPYqro",
  authDomain: "fdr-exam.firebaseapp.com",
  projectId: "fdr-exam",
  storageBucket: "fdr-exam.appspot.com",
  messagingSenderId: "876181910553",
  appId: "1:876181910553:web:dbf0b947fa8285dc2b6688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig