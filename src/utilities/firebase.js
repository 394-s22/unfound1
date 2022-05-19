import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAMz6_VRq7r6UxaECz52z1-wWKvqx_R4zU",
    authDomain: "unfound-ae9d2.firebaseapp.com",
    projectId: "unfound-ae9d2",
    storageBucket: "unfound-ae9d2.appspot.com",
    messagingSenderId: "460409580342",
    appId: "1:460409580342:web:f8262dfcd6679ffa11a197"
};

export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);