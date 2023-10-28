import React from 'react'
import { useState, useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ producto }) => {
    const { addItemToCart, itemInCart } = useContext(CartContext);
    const [count, setCount] = useState(1);
    const [pictureNumber, setPictureNumber] = useState(0);


return (
    <div className="itemDetail__container">
        <h1>{producto.title}</h1>
        <div className="itemDetail__columns">
            <div className="itemDetail__column--description">
                <p>{producto.description}</p>
                <h2>${producto.price}.</h2>
                <p>Disponibles: {producto.stock}</p>
                <ItemCount count={count} setCount={setCount} stock={producto.stock} />

                <button
                        className="itemDetail__btn--AddItemToCart"
                        onClick={() => {
                            addItemToCart(producto, count);
                        }}
                    >
                        {itemInCart(producto.id) ? "Producto agregado al carrito" : "Agregar al carrito"}
                    </button>

            </div>
        </div>

    </div>
);
};
export default ItemDetail