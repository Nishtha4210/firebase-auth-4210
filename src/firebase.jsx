
 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from 'firebase/firestore'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyCpvkOfyMG4CntxmZNFm1MkqKU4nsg5D7c",
     authDomain: "fir-curd-b5330.firebaseapp.com",
     projectId: "fir-curd-b5330",
     storageBucket: "fir-curd-b5330.firebasestorage.app",
     messagingSenderId: "593155167522",
     appId: "1:593155167522:web:2b153815251099f353417b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);