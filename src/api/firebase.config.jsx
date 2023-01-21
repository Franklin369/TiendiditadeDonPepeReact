import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAN3p55Xw_XgGxWYFjRBRzl7yUCsks0fK0",
  authDomain: "tiendadonpepe-9a534.firebaseapp.com",
  projectId: "tiendadonpepe-9a534",
  storageBucket: "tiendadonpepe-9a534.appspot.com",
  messagingSenderId: "177972621504",
  appId: "1:177972621504:web:08f30a60b939e1ff4d3d25",
};

// Initialize Firebase
// const fb = firebase.initializeApp(firebaseConfig);
// export const db= fb.firestore();

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = getAuth(app);
export const storage = getStorage(app);

