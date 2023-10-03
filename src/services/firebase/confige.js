// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBde4ZootLjPQjnHm_guEB9YE28DlkgBSk",
  authDomain: "simple-store-c9706.firebaseapp.com",
  projectId: "simple-store-c9706",
  storageBucket: "simple-store-c9706.appspot.com",
  messagingSenderId: "789227699677",
  appId: "1:789227699677:web:6986979a29b580f55b4a34",
  measurementId: "G-5QWD6QQWEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);

// Collections
const productRef = collection(firebaseDB, "products");

export { productRef };
