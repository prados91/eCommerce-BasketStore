import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
function App() {

    return (

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer greeting={'Bienvenidos a Basketball | Store'} />} />
                    <Route exact path='/categoria/:category' element={<ItemListContainer greeting={'Categorias'}/>} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route exact path='*' element={<h1> 404 NOT FOUND </h1>} />
                </Routes>
                <Footer />
            </BrowserRouter>
 
    )
}

export default App;