import React from 'react'
import { Formik } from "formik";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Loading from '../Loading/Loading';
import './Form.css'


const Form = () => {
    const [loading, setLoading] = useState(false);
    const [checkoutDone, setCheckoutDone] = useState(false);
    const [buyer, setBuyer] = useState({});
    const [idLastCheckout, setIdLastCheckout] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
  
    const { cart, clearCart } = useContext(CartContext);
  
    const createOrder = (values) => {
      const order = {
        buyer: {
          name: values.name,
          lastname: values.lastname,
          phone: values.phone,
          email: values.email,
        },
        items: cart,
        total: totalPrice,
      };
     /* const db = getFirestore();
      const dbCollection = collection(db, "orders");
      addDoc(dbCollection, order)
        .then(({ id }) => {
          setCheckoutDone(true);
          setLoading(false);
          setIdLastCheckout(id);
          clearCart();
        })
        .catch((error) => {
          console.log(error);
        });*/
    };
  
    useEffect(() => {
      setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
    }, [cart]);
  
    return (
      <div className="checkoutContainer__container">
        {!loading && !checkoutDone && (
          <>
            <h2>Confirmá tus datos y finalizá tu compra ya!</h2>
            <Formik
              initialValues={{ name: "", lastname: "", phone: "", email: "", emailConf: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Ingrese un nombre válido";
                }
                if (!values.lastname) {
                  errors.lastname = "Ingrese un apellido válido";
                }
                if (!values.phone) {
                  errors.phone = "Ingrese un número de teléfono válido";
                }
                if (!values.email) {
                  errors.email = "Ingrese un correo electrónico válido";
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = "Ingrese un correo electrónico válido";
                }
                if (!values.emailConf) {
                  errors.emailConf = "Ingrese un correo electrónico válido";
                } else if (values.emailConf !== values.email) {
                  errors.emailConf = "Los correos electrónicos deben ser iguales";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setLoading(true);
                createOrder(values);
                setBuyer(values);
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Nombre"
                  />
                  {errors.name && touched.name && errors.name}
  
                  <input
                    type="lastname"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                    placeholder="Apellido"
                  />
                  {errors.lastname && touched.lastname && errors.lastname}
  
                  <input
                    type="phone"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Teléfono"
                  />
                  {errors.phone && touched.phone && errors.phone}
  
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Correo electrónico"
                  />
                  {errors.email && touched.email && errors.email}
  
                  <input
                    type="emailConf"
                    name="emailConf"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.emailConf}
                    placeholder="Confirmación de correo electrónico"
                  />
                  {errors.emailConf && touched.emailConf && errors.emailConf}
  
                  <button type="submit" disabled={isSubmitting}>
                    Confirmar compra
                  </button>
                </form>
              )}
            </Formik>
          </>
        )}
        {loading && !checkoutDone && <Loading />}
        {!loading && checkoutDone && (
          <div className="checkoutContainer__checkoutDone">
            <h2>
              Felicitaciones {buyer.name} {buyer.lastname}!<br />
              Recibirás en tu casilla de correo electrónico {buyer.email} todos los datos de tu compra.
              <br />
              El número de seguimiento de tu orden es: {idLastCheckout}
            </h2>
            <Link to="/" className="checkoutContainer__btnContinue">
              <p>Volver a la tienda!</p>
            </Link>
          </div>
        )}
      </div>
    );
  };

export default Form