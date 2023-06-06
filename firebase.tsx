
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBXHJJqdmAIBb78TH4m60YTpIX0l5-4DCw",
  authDomain: "lendsqr-test.firebaseapp.com",
  projectId: "lendsqr-test",
  storageBucket: "lendsqr-test.appspot.com",
  messagingSenderId: "94850185950",
  appId: "1:94850185950:web:ff7aff6b0be102b362a04f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;