// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDG45-MjNbG33NkuCV_XGRDM-W6ogmHx7M",
//   authDomain: "blog-plateform.firebaseapp.com",
//   projectId: "blog-plateform",
//   storageBucket: "blog-plateform.appspot.com",
//   messagingSenderId: "401845154664",
//   appId: "1:401845154664:web:a5257ffb9295105a6a5cdd"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDG45-MjNbG33NkuCV_XGRDM-W6ogmHx7M",
    authDomain: "blog-plateform.firebaseapp.com",
    projectId: "blog-plateform",
    storageBucket: "blog-plateform.appspot.com",
    messagingSenderId: "401845154664",
    appId: "1:401845154664:web:a5257ffb9295105a6a5cdd"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export  const storage = getStorage(app);
