// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1flj8VMrZ1-Idu8Re3kWXvhjhtyD4w_M",
  authDomain: "simple-store-67f20.firebaseapp.com",
  projectId: "simple-store-67f20",
  storageBucket: "simple-store-67f20.appspot.com",
  messagingSenderId: "10370099534",
  appId: "1:10370099534:web:c00d262fd34cb4af7a961f",
  measurementId: "G-65XQLSHFM1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);

// Collections
const productRef = collection(firebaseDB, "products");

export { productRef };
