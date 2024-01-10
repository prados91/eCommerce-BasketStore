import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import CartContainer from './components/CartContainer/CartContainer';
import Formm from './components/Form/Form'
import { CartProvider } from './context/CartContext';

import './App.css'
function App() {

    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting={'Bienvenidos a Basketball | Store'} />} />
                    <Route exact path='/categoria/:category' element={<ItemListContainer />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartContainer />} />
                    <Route path="/form" element={<Formm />} />
                    <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>

    )
}

export default App;