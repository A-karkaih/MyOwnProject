// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API,
    authDomain: "myproject-a6bbb.firebaseapp.com",
    projectId: "myproject-a6bbb",
    storageBucket: "myproject-a6bbb.appspot.com",
    messagingSenderId: "351461427844",
    appId: "1:351461427844:web:03b92725e791656e7dd0d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
