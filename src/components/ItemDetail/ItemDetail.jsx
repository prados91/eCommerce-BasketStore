import React from 'react'
import { useState, useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ producto }) => {
    const { addItemToCart, itemInCart } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const [imageNumber, setImageAux] = useState(0);

    const toastyNew = (count) => {
        toast.success(count == 1 ? 'Producto agregado al carrito' : 'Se agregaron ' + `${count}` + ' productos al carrito', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const toastyDuplicated = (count) => {
        toast.warn(count == 1 ? 'Se agregó un elemento adicional' : 'Se agregaron  ' + `${count}` + ' elementos adicionales', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    }

    const callFunction = () => {
        if (itemInCart(producto.id)) {
            toastyDuplicated(count);
            addItemToCart(producto, count);
        } else {
            toastyNew(count);
            addItemToCart(producto, count);
        }
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="itemDetail__container">
            <h1>{producto.title}</h1>

            <div className="itemDetail__columns">

                <div className="itemDetail__column--imageAux">
                    <div
                        onClick={() => {
                            setImageAux(0);
                        }}
                        className="itemDetail__column--imageAux">
                        <img src={producto.imageAux[0]} alt={producto.title} />
                    </div>
                    <div
                        onClick={() => {
                            setImageAux(1);
                        }}
                    >
                        <img src={producto.imageAux[1]} alt={producto.title} />
                    </div>
                    <div
                        onClick={() => {
                            setImageAux(2);
                        }}
                    >
                        <img src={producto.imageAux[2]} alt={producto.title} />
                    </div>
                </div>


                <div className="itemDetail__column--image">
                    <div>
                        {/*<img src={producto.image} alt={producto.title} />  <img src={producto.imageAux[imageNumber]} alt={producto.title} />  */}
                        {!isMobile ? <img src={producto.imageAux[imageNumber]} alt={producto.title} /> : <img src={producto.imageAux[0]} alt={producto.title} />}

                    </div>
                </div>
                <div className="itemDetail__column--description">
                    <p>{producto.description}</p>
                    <h2>${producto.price}.</h2>
                    <p>Disponibles: {producto.stock}</p>
                    <ItemCount count={count} setCount={setCount} stock={producto.stock} />

                    <button
                        className="itemDetail__btn--AddItemToCart"
                        onClick={() => { callFunction(); }}
                    >
                        Agregar al carrito
                    </button>
                    <ToastContainer />
                </div>
            </div>

        </div>
    );
};
export default ItemDetail