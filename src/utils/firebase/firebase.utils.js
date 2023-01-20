import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByXzNkIwUEwD-4HzlGn6xt4by9PuQ_opU",
  authDomain: "commerce-clothing-db.firebaseapp.com",
  projectId: "commerce-clothing-db",
  storageBucket: "commerce-clothing-db.appspot.com",
  messagingSenderId: "583638184570",
  appId: "1:583638184570:web:21332f0c972795b1eb81c3",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);