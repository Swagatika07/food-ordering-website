import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAS3NMLkXgBXCGg0oKPZG3XqLnOu-Qzr6I",
    authDomain: "food-ordering-app-interim.firebaseapp.com",
    databaseURL: "https://food-ordering-app-interim-default-rtdb.firebaseio.com",
    projectId: "food-ordering-app-interim",
    storageBucket: "food-ordering-app-interim.appspot.com",
    messagingSenderId: "931495184836",
    appId: "1:931495184836:web:9df6edcfd1323882d0bc91"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);  
  const firestore =getFirestore(app);
  const storage =getStorage(app);

  export { app, firestore, storage };