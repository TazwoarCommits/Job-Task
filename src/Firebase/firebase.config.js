// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// apiKey: "AIzaSyCIWu4XGW-FJMJT2fFAqI-i6lpAIfrkm1Y",
// authDomain: "task-todo-3cc35.firebaseapp.com",
// projectId: "task-todo-3cc35",
// storageBucket: "task-todo-3cc35.firebasestorage.app",
// messagingSenderId: "954706845274",
// appId: "1:954706845274:web:0cca36f1342af738040263"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;