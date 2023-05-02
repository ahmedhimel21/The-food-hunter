// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnGGckLJhJ3YHjDz0udvvE38Gnx0M5kPE",
  authDomain: "the-food-hunter-fd5d5.firebaseapp.com",
  projectId: "the-food-hunter-fd5d5",
  storageBucket: "the-food-hunter-fd5d5.appspot.com",
  messagingSenderId: "347855985296",
  appId: "1:347855985296:web:a1c95131f5413e27b11615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;