import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOUEEhNvy9lUOsVc6qbLTXLUBGe1bT24A",
  authDomain: "shop-9d517.firebaseapp.com",
  databaseURL:
    "https://shop-9d517-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shop-9d517",
  storageBucket: "shop-9d517.appspot.com",
  messagingSenderId: "946299113732",
  appId: "1:946299113732:web:c1d29b684067c65a624051",
  measurementId: "G-6DMKXG0LXB",
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWidthGoogle = async (auth) => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      return { token, user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { errorCode, errorMessage, credential };
    });
};
export const signOutWidthGoogle = async (auth) => {
  signOut(auth)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
