import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKcoo8ivABHpGBMbkkiyk1LAD_WGp97bs",
  authDomain: "project-b58de.firebaseapp.com",
  projectId: "project-b58de",
  storageBucket: "project-b58de.firebasestorage.app",
  messagingSenderId: "610252118703",
  appId: "1:610252118703:web:1ffb7a31045b3f3f6d125a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);