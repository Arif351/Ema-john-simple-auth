// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOx4kzz3Y2nMEteSDAVK1o7sp1asLdvPI",
    authDomain: "context-revision.firebaseapp.com",
    projectId: "context-revision",
    storageBucket: "context-revision.appspot.com",
    messagingSenderId: "180423417483",
    appId: "1:180423417483:web:805a79dd21f75b7bc17e8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;