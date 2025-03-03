// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {


//   apiKey: "AIzaSyBvGvS5o6jNtRwPudGd1nq8MMRW66URAuM",
//   authDomain: "bd-job-path.firebaseapp.com",
//   projectId: "bd-job-path",
//   storageBucket: "bd-job-path.firebasestorage.app",
//   messagingSenderId: "794455189192",
//   appId: "1:794455189192:web:4ba90f2499c88a28bbe7fd"

  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID

};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);