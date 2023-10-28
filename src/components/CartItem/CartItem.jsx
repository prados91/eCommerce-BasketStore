import React from 'react'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'

const CartItem = () => {
    const { cart, deleteItemFromCart } = useContext(CartContext);

    return (
        <div className="cartItem__container">
            {cart.map((producto) => (
                <div className="cartItem__producto" key={producto.id}>
                    <div className="cartItem__producto--detail">
                        <button className="cartItem__producto--btnDelete" onClick={() => deleteItemFromCart(producto.id)}>
                        </button>
                        <div>
                            {producto.title} (x {producto.cantidad}u.)
                        </div>
                    </div>
                    <div className="cartItem__producto--price">${producto.cantidad * producto.price}.-</div>
                </div>
            ))}
        </div>
    );
};

export default CartItem