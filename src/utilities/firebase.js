import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import 'firebase/storage';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';


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
const database = getDatabase(firebase);

export const pushData = (path, value) => (
    push(ref(database, path), value)
);

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
};