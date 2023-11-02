import React from 'react'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

import './CartItem.css'

const CartItem = () => {
    const { cart, deleteItemFromCart } = useContext(CartContext);

    console.log(cart)


    return (
        <div>
            {cart.map((producto) => (
                <div className="cartItem__producto" key={producto.id}>
                    <div className="cartItem__producto--detail">
                        <button className="cartItem__producto--btnDelete" onClick={() => deleteItemFromCart(producto.id)}>
                            X
                        </button>
                        <img src={producto.image} alt={producto.title} />
                        <div>
                            {producto.title} (x {producto.quantity}u.)
                        </div>
                    </div>
                    <div className="cartItem__producto--price">${producto.quantity * producto.price}</div>
                </div>
            ))}

        </div>
    );
};

export default CartItem

