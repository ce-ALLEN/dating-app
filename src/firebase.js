// import firebase from "./firebase";
import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyA0qt7yz1jYew-fxG4Gtn1jfTGU9TkzfiE",
    authDomain: "dating-app-c006c.firebaseapp.com",
    projectId: "dating-app-c006c",
    storageBucket: "dating-app-c006c.appspot.com",
    messagingSenderId: "897596846634",
    appId: "1:897596846634:web:37e2b063e2eb150f9e4953",
    measurementId: "G-ML41Z1MGQ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;