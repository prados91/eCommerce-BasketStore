import React from 'react'
import { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
    const [count, setCount] = useState(1);
    return (
        <div className="itemDetail__container">
            <h1>{producto.title}</h1>
            <div className="itemDetail__columns">
                <div className="itemDetail__column--description">
                    <p>{producto.description}</p>
                    <h2>${producto.price}.</h2>
                    <p>Disponibles: {producto.stock}</p>
                    <ItemCount count={count} setCount={setCount} stock={producto.stock} />
                    <button className="itemDetail__btnAddToCart">Agregar al carrito.</button>
                </div>
            </div>
        </div>
    );
};
export default ItemDetail