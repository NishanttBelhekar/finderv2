import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiT3G0Ysvxrz-3K1sxUfBwXEZVLFOy3Ls",
  authDomain: "intershipbinary.firebaseapp.com",
  projectId: "intershipbinary",
  storageBucket: "intershipbinary.appspot.com",
  messagingSenderId: "684390458887",
  appId: "1:684390458887:web:156403e16f28e1d3ea6ca2",
  measurementId: "G-346RDQW816",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
