import React, {createContext, useContext, useState} from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext); //custom hook
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems,item]);
    };
    const removeFromCart = (removeItem) => {
        setCartItems((prevItems) => prevItems.filter((_,index) => index !== removeItem));
    }
    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};


