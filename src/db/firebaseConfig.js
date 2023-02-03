import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
        apiKey: "AIzaSyC7s0pP92vSQKVigywbzqW-2IWzNsFUlxo",
    authDomain: "productosapple-9ffb1.firebaseapp.com",
    projectId: "productosapple-9ffb1",
    storageBucket: "productosapple-9ffb1.appspot.com",
    messagingSenderId: "677667815834",
    appId: "1:677667815834:web:3d8d3c3123e30024cfba23"
            };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

