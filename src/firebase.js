import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAWcb15XpqHCqK-r1Pi2W1ikn1YT6KMHoQ",
  authDomain: "auntik-s-todo-app.firebaseapp.com",
  projectId: "auntik-s-todo-app",
  storageBucket: "auntik-s-todo-app.appspot.com",
  messagingSenderId: "332951037650",
  appId: "1:332951037650:web:d2fb7f715dfa1d2d7eef0b",
  measurementId: "G-MGKZ3VR7C8",
});

const db = firebaseApp.firestore();

export default db;
