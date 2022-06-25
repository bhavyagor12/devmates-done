import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzsTKuJWI7Ut-b3tXXirETVENd9PnhEes",
  authDomain: "devmates-90432.firebaseapp.com",
  projectId: "devmates-90432",
  storageBucket: "devmates-90432.appspot.com",
  messagingSenderId: "250633572131",
  appId: "1:250633572131:web:5ef3963a3bace17bd10696",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
