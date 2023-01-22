import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";
import {getFirestore} from "@firebase/firestore";
import {GoogleAuthProvider , getAuth} from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();