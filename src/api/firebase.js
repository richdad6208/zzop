import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const login = async () => {
  return signInWithPopup(auth, provider).catch(console.error);
};

export const logout = async () => {
  return signOut(auth).catch(console.error);
};

export const checkUserState = (callback) => {
  onAuthStateChanged(auth, callback);
};
