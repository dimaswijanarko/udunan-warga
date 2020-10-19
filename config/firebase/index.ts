import { initializeApp } from "firebase";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = !firebase.apps.length ? initializeApp({
  apiKey: "AIzaSyAuEVungp1IizeopX8w39Lqz-KwjWLQ3Rs",
  authDomain: "udunan-warga-dev.firebaseapp.com",
  databaseURL: "https://udunan-warga-dev.firebaseio.com",
  projectId: "udunan-warga-dev",
  storageBucket: "udunan-warga-dev.appspot.com",
  messagingSenderId: "358446492009",
  appId: "1:358446492009:web:5082fb825fa3f2c62ef5f8",
  measurementId: "G-D41VQNBJVY"
}) : null;

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
console.log(process.env.NODE_ENV === 'development' && app && app.name ? 'Firebase Mode Activated!' : 'Firebase not working');
