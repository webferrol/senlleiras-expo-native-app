// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// base de datos de firestore
import { getFirestore } from "firebase/firestore";
// Cloud storage
import { getStorage } from "firebase/storage";
//Authentification
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAidhWfwN3WKa-P2-uBQL81M-T4KJj5mWs",
  authDomain: "senlleirapp-3e5fe.firebaseapp.com",
  projectId: "senlleirapp-3e5fe",
  storageBucket: "senlleirapp-3e5fe.appspot.com",
  messagingSenderId: "857393304559",
  appId: "1:857393304559:web:62d4f7e4ff2dc00c5cdc1a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
// coger la funcion con su parametro y la exporto
export const db = getFirestore(app);
