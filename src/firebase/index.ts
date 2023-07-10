import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
// config
import firebaseConfig from "./config";

class Firebase {
  auth: Auth;
  db: Firestore;
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }
}

const firebase = new Firebase();
export default firebase;
