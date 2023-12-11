// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgWmGy3lHZI55MX61WckuotEiKzk-Qvs8",
  authDomain: "compare-85a4e.firebaseapp.com",
  projectId: "compare-85a4e",
  storageBucket: "compare-85a4e.appspot.com",
  messagingSenderId: "596699143513",
  appId: "1:596699143513:web:8163617acc661ab69c4048"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);