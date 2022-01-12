// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzHu8TrGpXEi-NPR4SBhw_IjqV6JHYN8U",
  authDomain: "clone-849s.firebaseapp.com",
  projectId: "clone-849s",
  storageBucket: "clone-849s.appspot.com",
  messagingSenderId: "1010933802677",
  appId: "1:1010933802677:web:54ee939cc1448da1e400fc",
  measurementId: "G-0SEMLZ4Q3L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
