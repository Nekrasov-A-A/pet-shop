import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebase = initializeApp({
  apiKey: "AIzaSyCpdacJNwh7qxUKeKdp5DT3vTSDwoijvv4",
  authDomain: "pet-shop-b3e22.firebaseapp.com",
  projectId: "pet-shop-b3e22",
  storageBucket: "pet-shop-b3e22.appspot.com",
  messagingSenderId: "744286127439",
  appId: "1:744286127439:web:4ab4971d7351439591713a",
});

const db = getFirestore(firebase);

export default db;
