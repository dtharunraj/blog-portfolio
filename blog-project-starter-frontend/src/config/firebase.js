
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDoTEeKI9d5-2GIlap1DZtB6fPlmVcjHaU",
  authDomain: "blog-app-eadca.firebaseapp.com",
  projectId: "blog-app-eadca",
  storageBucket: "blog-app-eadca.firebasestorage.app",
  messagingSenderId: "685514822429",
  appId: "1:685514822429:web:47e558fdd95d56b77347f4",
  measurementId: "G-5926QMPTGY"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
 
export default auth