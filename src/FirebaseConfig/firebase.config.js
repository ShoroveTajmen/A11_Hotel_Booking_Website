// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBkGhZ9Uc8lE8xB5iZuQqXJzjPRPOlhHQ",
  authDomain: "hotel-booking-8c7a2.firebaseapp.com",
  projectId: "hotel-booking-8c7a2",
  storageBucket: "hotel-booking-8c7a2.appspot.com",
  messagingSenderId: "782290219599",
  appId: "1:782290219599:web:01e475e6dbe2436a1ff03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);