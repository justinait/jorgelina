import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYpJBTpE3-Ceus4W-rUoYrPRloBKdlXn4",
  authDomain: "jorgelinaparkinson-beb87.firebaseapp.com",
  projectId: "jorgelinaparkinson-beb87",
  storageBucket: "jorgelinaparkinson-beb87.appspot.com",
  messagingSenderId: "41743681410",
  appId: "1:41743681410:web:df764305df6e7ed16bf19b",
  measurementId: "G-F92FN8JF8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;