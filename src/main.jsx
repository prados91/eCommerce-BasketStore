import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBFrXolaN3YVmjq0TcCZhKe117HddwauNY",
    authDomain: "basketstore-d9daa.firebaseapp.com",
    projectId: "basketstore-d9daa",
    storageBucket: "basketstore-d9daa.appspot.com",
    messagingSenderId: "475221220775",
    appId: "1:475221220775:web:b4e41e37da003efe552a82"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>

)
