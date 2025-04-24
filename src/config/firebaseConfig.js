import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDr1qsAALSjhJsnFMCRw2OVfEc6xxNIsPg",
  authDomain: "trabalho-01-react-login.firebaseapp.com",
  projectId: "trabalho-01-react-login",
  storageBucket: "trabalho-01-react-login.firebasestorage.app",
  messagingSenderId: "629776884340",
  appId: "1:629776884340:web:527f26609da6053bbe2721",
  measurementId: "G-M16JLLDWXN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };