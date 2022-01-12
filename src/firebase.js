// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6IjaoHsNimfCsL4STCySBkb25uF00xCU",
  authDomain: "clone-fa23f.firebaseapp.com",
  projectId: "clone-fa23f",
  storageBucket: "clone-fa23f.appspot.com",
  messagingSenderId: "438951853834",
  appId: "1:438951853834:web:1c2deea671bdc9e0ba04f3",
  measurementId: "G-8QSBTSZS6J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
