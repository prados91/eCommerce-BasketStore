import React from 'react'
import cartIcon from '/cartWidget.png'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <div className="cartWidget__container">
            <img src={cartIcon} alt="Icono de carrito" className='cartWidget__logo'/>
            <p className="cartWidget__number">0</p>
        </div>
    )
}

export default CartWidget