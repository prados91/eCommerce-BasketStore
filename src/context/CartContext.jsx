import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
  
    const getCartFromLS = () => {
      const cartJSONGet = JSON.parse(localStorage.getItem("cartJSON"));
      cartJSONGet && setCart(cartJSONGet);
    };
  
    const setCartLS = () => localStorage.setItem("cartJSON", JSON.stringify(cart));
  
    const itemInCart = (id) => cart.some((item) => item.id === id);

    const addItemToCart = (product, quantity) => {
        const { id, title, price } = product;
      
        if (!itemInCart(id) && quantity > 0) {
          const newItem = { id, title, price, quantity };
          const newCart = cart.concat(newItem); // Concatenar el nuevo elemento al arreglo cart
          setCart(newCart);
        }
      };

    const deleteItemFromCart = (id) => {
        if (itemInCart(id)) {
          const updateCart = cart.filter((item) => item.id !== id);
          setCart(updateCart);
        }
      };

    const clearItemsFromCart = () => {
      setCart([]);
    };
  
    useEffect(() => {
      getCartFromLS();
    }, []);
  
    useEffect(() => {
      setCartLS();
    }, [cart]);
  
    return (
      <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart , itemInCart, clearItemsFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };

export default CartProvider;