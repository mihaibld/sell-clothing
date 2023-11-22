import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDvoZa0mpp8YHu0Fj2xCDEjQZ9XxhOnggk",
  authDomain: "sell-clothing-db.firebaseapp.com",
  projectId: "sell-clothing-db",
  storageBucket: "sell-clothing-db.appspot.com",
  messagingSenderId: "809169683901",
  appId: "1:809169683901:web:14b08f27ad3862f022bed4"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);