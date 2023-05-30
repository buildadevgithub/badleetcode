import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD2PJsOw-Ost1NiDlY9qDLIzzwckj9rJFo",
	authDomain: "leetcode-acb4f.firebaseapp.com",
	projectId: "leetcode-acb4f",
	storageBucket: "leetcode-acb4f.appspot.com",
	messagingSenderId: "752883042102",
	appId: "1:752883042102:web:9e7b53ad52c49abb0ed597",
	measurementId: "G-M5119KKTY6"
  };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
