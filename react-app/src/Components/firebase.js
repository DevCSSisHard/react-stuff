// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword,
         createUserWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth"
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "myapikey",
  authDomain: "reactstuff-6da0a.firebaseapp.com",
  projectId: "reactstuff-6da0a",
  storageBucket: "reactstuff-6da0a.appspot.com",
  messagingSenderId: "418093098418",
  appId: "myappid",
  measurementId: "G-D2PHWG93S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
//try sign in using googleAuthProvider given by firebase.
//followed by querying db to check if user exists, if not, then make new record.
const signInWithGoogle = async() => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid, name:user.displayName, authProvider: "google", email: user.email, });
      }
    } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//knowing user exists (or should) sign in no need to check, just auth - firebase provides signInWithEmailAndPassword
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, passowrd) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, passowrd);
    const user = res.user;
    await addDoc(collection(db, "users") , {
      uid: user.uid, name, authProvider: "local", email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth, db, signInWithGoogle,signInWithEmailAndPassword,registerWithEmailAndPassword,sendPasswordReset,logout,
};
