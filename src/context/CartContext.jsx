import { createContext, useState } from "react";

export const CartContext = createContext( {
  cart : [];
});

export const CartComponentContext = ({children}) => {
  const [cartList, setCartList] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  // agregar un producto al carrito
  const addToCart = (item, amount) => {};

  // borrar todos los productos del carrito
  const clearCart = () => {};

  // borrar un producto del carrito
  const deleteItem = (id) => {};

  return (
    <CartContext.Provider value={{ cartList, addToCart, clearCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

