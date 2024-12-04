import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9vY5mXjbioLpziB4Eox0IUtXzgTpnqWo",
  authDomain: "mc-biotrain.firebaseapp.com",
  projectId: "mc-biotrain",
  storageBucket: "mc-biotrain.firebasestorage.app",
  messagingSenderId: "805349551433",
  appId: "1:805349551433:web:e914e3309c3104f3a8fe98",
  measurementId: "G-XQXL4WJYTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Analytics only on the client side
if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}