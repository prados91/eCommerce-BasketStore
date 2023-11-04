import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, addDoc } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFrXolaN3YVmjq0TcCZhKe117HddwauNY",
    authDomain: "basketstore-d9daa.firebaseapp.com",
    projectId: "basketstore-d9daa",
    storageBucket: "basketstore-d9daa.appspot.com",
    messagingSenderId: "475221220775",
    appId: "1:475221220775:web:b4e41e37da003efe552a82"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>

)
