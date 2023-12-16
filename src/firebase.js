import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa8_K5Hh9xSEChw6iwDDxSgukuxixQd2Y",
  authDomain: "instagram-clone-667c9.firebaseapp.com",
  projectId: "instagram-clone-667c9",
  storageBucket: "instagram-clone-667c9.appspot.com",
  messagingSenderId: "362493291488",
  appId: "1:362493291488:web:ab3d017f7586938fec9985",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
