import React from 'react'
import { Formik } from "formik";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loading from '../Loading/Loading';
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import './Form.css'


const Form = () => {
    const [load, setLoad] = useState(false);
    const [order, setOrder] = useState(false);
    const [OC_Cliente, setOC_Cliente] = useState({});
    const [orderID, setOrderID] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    const { cart, clearItemsFromCart } = useContext(CartContext);

    const OC_Create = (values) => {
        const order = {
            OC_Cliente: {
                name: values.name,
                email: values.email,
            },
            items: cart,
            total: totalPrice,
        };
        const db = getFirestore();
        const orderCollection = collection(db, "OC_Orders");
        addDoc(orderCollection, order).then(({ id }) => {
            setOrder(true);
            setLoad(false);
            setOrderID(id);
            clearItemsFromCart();
        })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
    }, [cart]);

    return (
        <div className="form__container">
            {!load && !order && (
                <>
                    <h2>Ingresa tus datos para confirmar la compra:</h2>
                    <Formik
                        initialValues={{ name: "", lastname: "", email: "" }}
                        onSubmit={(values, { setSubmitting }) => {
                            setLoad(true);
                            OC_Create(values);
                            setOC_Cliente(values);
                            setSubmitting(false);
                        }}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit} className='form__container--form'>
                                <input className="form__input" type="name" name="name" onChange={handleChange} value={values.name} placeholder="Nombre" />
                                <input className="form__input" type="lastname" name="lastname" onChange={handleChange} value={values.lastname} placeholder="Apellido" />
                                <input className="form__input" type="email" name="email" onChange={handleChange} value={values.email} placeholder="Correo electrónico" />
                                <button type="submit" disabled={isSubmitting} className='form__container--button'>Confirmar compra</button>
                            </form>
                        )}
                    </Formik>
                </>
            )}
            {load && !order && <Loading />}
            {!load && order && (
                <div className="form__order">
                    <p>Muchas gracias {OC_Cliente.name} por comprar en Basketball | Store</p>
                    <p>Nos contactaremos a {OC_Cliente.email} para finalizar los detalles de la compra y envío.</p>
                    <p>Tu número de compra es : {orderID}</p>

                    <Link to="/" >
                        <button className="form__btnEND">Rebotar a la tienda</button>
                    </Link>
                </div>
            )}
        </div>
    );
};
export default Form