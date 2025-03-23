import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({children}) => {
  const [cartList, setCartList] = useState([]);

  // agregar un producto al carrito
  const addItem = (item, amount) => {
    // verificar si el item ya está en cart
    // si está, sumarle el amount al existente
    // si no está, agregar al cartList

    // no aceptar duplicados 

  };

  // borrar todos los productos del carrito
  const clearCart = () => {
    setCartList([]);
  };

  // borrar un producto del carrito
  const deleteItem = (id) => {};

  // busca si ya existe el producto en el cart
  const isInCart = (id) => {}

  return (
    <CartContext.Provider value={{ cartList, addItem, clearCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

