import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRVwgrOgWqaIBmvyNNns9MmURTZvogOjw",
  authDomain: "disney-clone-63c4d.firebaseapp.com",
  projectId: "disney-clone-63c4d",
  storageBucket: "disney-clone-63c4d.appspot.com",
  messagingSenderId: "1037390352121",
  appId: "1:1037390352121:web:f7c3a12354f014180adc28",
  measurementId: "G-703513MY21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
