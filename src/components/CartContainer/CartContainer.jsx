import React from 'react'
import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

import CartItem from '../CartItem/CartItem'

import './CartContainer.css'

const CartContainer = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [cartEmpty, setCartEmpty] = useState(true);

    const { cart, clearItemsFromCart } = useContext(CartContext);

    useEffect(() => {
        setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
        setCartEmpty(cart.length === 0);
    }, [cart]);

    return (
        <div className="cartContainer">
            <div className="cartContainer__container">
                <h2>Carrito de compras</h2>
                <hr />
                <div className="cartContainer__columns">
                    <p>Producto</p>
                    <p>Subtotal</p>
                </div>
                <hr />
                <div className="cartContainer__products">
                    {cartEmpty ? <div>El carrito de compras está vacio!</div> : <CartItem />}
                </div>
                <hr />
                <p className="cartContainer__totalPrice">
                    <b>TOTAL: ${totalPrice}</b>
                </p>
                <hr />
                {!cartEmpty && (
                    <div className="cartContainer__buttons">
                        <button
                            className="cartContainer__btnclearItemsFromCart"
                            onClick={() => {
                                clearItemsFromCart();
                            }}
                        >
                            Vaciar carrito
                        </button>
                        <Link to="/form">
                            <button className="cartContainer__btnForm">Finalizar compra</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CartContainer

