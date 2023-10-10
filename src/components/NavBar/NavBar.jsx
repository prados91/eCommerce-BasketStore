import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import navLogo from '/logoBasketStore.png'
import './NavBar.css'

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid navbar__container">
                    <button className="navbar__logo" ><img src={navLogo} alt="Logo de la tienda" /></button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <button className='navbar__items--btn'>Gorras</button>
                            <button className='navbar__items--btn'>Camisetas</button>
                            <button className='navbar__items--btn'>Pantalones</button>
                            <button className='navbar__items--btn'>Camperas y buzos</button>
                        </ul>
                        <ul>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar


