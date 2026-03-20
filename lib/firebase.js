import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyArjFeSQkfzr-_DBBS8x37d9Its86raDxk",
  authDomain: "kslegal-69fe9.firebaseapp.com",
  projectId: "kslegal-69fe9",
  storageBucket: "kslegal-69fe9.firebasestorage.app",
  messagingSenderId: "247881572018",
  appId: "1:247881572018:web:504016063d407424be33ab",
  measurementId: "G-C2JFQHWSEV"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)