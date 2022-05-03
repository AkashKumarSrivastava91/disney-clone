import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCtJR89s7sEeuVf2DPpg0Wd0XPoa1TyHiA",
    authDomain: "disneyplus-clone-be09a.firebaseapp.com",
    projectId: "disneyplus-clone-be09a",
    storageBucket: "disneyplus-clone-be09a.appspot.com",
    messagingSenderId: "199553890546",
    appId: "1:199553890546:web:3fca78ae91006ba866b86b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;