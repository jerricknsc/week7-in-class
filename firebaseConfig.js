// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-xpA5OayajaGatv0PEMkKHpu1T82UHDk",
    authDomain: "test-5a8ff.firebaseapp.com",
    projectId: "test-5a8ff",
    storageBucket: "test-5a8ff.appspot.com",
    messagingSenderId: "425066198461",
    appId: "1:425066198461:web:cb3ccd99bc16413db30ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage