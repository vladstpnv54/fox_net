// Import the functions you need from the SDKs you need
import  { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1tpb6jnYq8FV_wdqUSkZ9Ik9JKqwsRyw",
    authDomain: "social-network-vkr.firebaseapp.com",
    projectId: "social-network-vkr",
    storageBucket: "social-network-vkr.appspot.com",
    messagingSenderId: "217814285038",
    appId: "1:217814285038:web:40cef8218b7e98c22cd1ff",
    measurementId: "G-E13FD3Q16H"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };