// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc0ZCWOh7gdyuZhZDPOebUHN9fbXavtHY",
  authDomain: "authentication-firebase-6ee4d.firebaseapp.com",
  projectId: "authentication-firebase-6ee4d",
  storageBucket: "authentication-firebase-6ee4d.appspot.com",
  messagingSenderId: "816050372264",
  appId: "1:816050372264:web:45f8a890464ae0173c4c9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;