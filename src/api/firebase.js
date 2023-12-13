import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {
  get,
  getDatabase,
  onChildAdded,
  onValue,
  ref,
  set,
} from "firebase/database";

const provider = new GoogleAuthProvider();
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DB_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
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

// DB
export const writeAdminData = (userId) => {
  const db = getDatabase();
  set(ref(db, "admins/" + userId), {
    isAdmin: true,
  });
};

export const readAdminData = async () => {
  const { uid } = auth.currentUser;
  const db = getDatabase();
  const adminRef = ref(db, "admins/" + uid);

  return new Promise((resolve, reject) => {
    onValue(
      adminRef,
      (snapshot) => {
        const { isAdmin } = snapshot.val();
        resolve(isAdmin);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
