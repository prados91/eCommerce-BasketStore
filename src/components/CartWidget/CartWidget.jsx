import React from 'react'
import { Link } from "react-router-dom";
import cartIcon from '/cartWidget.png'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <Link to="/cart" className="cartWidget__container">
            <img src={cartIcon} alt="Icono de carrito" className='cartWidget__logo' />
            <p className="cartWidget__number">0</p>
        </Link>
    )
}

export default CartWidget