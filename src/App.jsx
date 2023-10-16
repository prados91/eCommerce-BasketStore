import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting={'Bienvenidos a Basketball | Store'} />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Bienvenidos a Basketball | Store'} />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;