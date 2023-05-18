import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID
  apiKey: "AIzaSyA88ORjknaNNiZs2vkgnYFoDhts7nxlmXA",
  authDomain: "otp-app-demo-e887c.firebaseapp.com",
  projectId: "otp-app-demo-e887c",
  storageBucket: "otp-app-demo-e887c.appspot.com",
  messagingSenderId: "703794367269",
  appId: "1:703794367269:web:8b175344b19d525d9ce8cc",
};

// Initialize Firebase
const fireapp = initializeApp(firebaseConfig);

export const auth = getAuth(fireapp);
export default fireapp;
