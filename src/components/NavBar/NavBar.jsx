import React from 'react'
import { Link, NavLink } from "react-router-dom";
import CartWidget from '../CartWidget/CartWidget'
import navLogo from '/logoBasketStore.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid navbar__container">
                <Link to="/">
                    <button className="navbar__logo" ><img src={navLogo} alt="Logo de la tienda" /></button>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li><NavLink to="/category/gorras" className={({ isActive }) => isActive ? "navbar__items--btnON" : "navbar__items--btn"}>Gorras</NavLink></li>
                        <li><NavLink to="/category/camisetas" className={({ isActive }) => isActive ? "navbar__items--btnON" : "navbar__items--btn"}>Camisetas</NavLink></li>
                        <li><NavLink to="/category/pantalones" className={({ isActive }) => isActive ? "navbar__items--btnON" : "navbar__items--btn"}>Pantalones</NavLink></li>
                        <li><NavLink to="/category/camperas" className={({ isActive }) => isActive ? "navbar__items--btnON" : "navbar__items--btn"}>Camperas</NavLink></li>
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


