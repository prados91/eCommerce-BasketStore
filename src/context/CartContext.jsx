import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const getCartFromLS = () => {
      const cartJSONGet = JSON.parse(localStorage.getItem("cartJSON"));
      cartJSONGet && setCart(cartJSONGet);
    };
  
    const setCartLocalStorage = () => localStorage.setItem("cartJSON", JSON.stringify(cart));
  
    const itemInCart = (id) => cart.some((item) => item.id === id);
  
    const addItemToCart = ({ id, title, price }, cantidad) => {
      !itemInCart(id) && cantidad > 0 && setCart([...cart, { id, title, price, cantidad }]);
    };
  
    const deleteItemFromCart = (id) => {
      itemInCart(id) && setCart(cart.filter((item) => item.id !== id));
    };
  
    const clearItemsFromCart = () => {
      setCart([]);
    };
  
    useEffect(() => {
      getCartFromLS();
    }, []);
  
    useEffect(() => {
      setCartLocalStorage();
    }, [cart]);
  
    return (
      <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart, itemInCart, clearItemsFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };

export default CartProvider;