// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Q0nR401bIncRqnQw-px_FoAdUCYnnDQ",
  authDomain: "laundry-app-a02e7.firebaseapp.com",
  projectId: "laundry-app-a02e7",
  storageBucket: "laundry-app-a02e7.appspot.com",
  messagingSenderId: "16906498180",
  appId: "1:16906498180:web:eb1153b3c3e5eb9ac812d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore()

export {auth,db}



