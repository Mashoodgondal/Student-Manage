// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ7kSCGA8Bvpn4lY9DHXtjD5fTxysj2uk",
  authDomain: "student-management-ca8e8.firebaseapp.com",
  projectId: "student-management-ca8e8",
  storageBucket: "student-management-ca8e8.appspot.com",
  messagingSenderId: "198104572929",
  appId: "1:198104572929:web:156b77abded59e54f50c00",
  measurementId: "G-4HL0XWMBPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
