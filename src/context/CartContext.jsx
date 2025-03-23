import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartComponentContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  
  // agregar un producto al carrito
  const addItemToCart = (item) => {
    // el item viene con el amount dentro que en ItemDetail se crea un nuevo objeto con la info de producto y amount

    // verificar si el item ya está en cart
    // si está, sumarle el amount al existente
    // si no está, agregar al cartList

    // no aceptar duplicados 

    
    console.log(isInCart(item.id));

    // GUARDAR A cartList
    // PARA AGREGAR ITEM A CART
      // desestructurar el cartList existente y agregarle lo nuevo
      setCartList([...cartList, item]);
  };

  // TEMP mostrar en consola CartList cuando cambie
  useEffect(() => {
    console.log("Cart actualizado", cartList);
  }, [cartList]);

  // borrar todos los productos del carrito
  const clearCart = () => {
    setCartList([]);
  };

  // borrar un producto del carrito
  const deleteItem = (id) => {};

  // busca si ya existe el producto en el cart
  const isInCart = (id) => {
    return cartList.some(product => product.id === id);
  }

  return (
    <CartContext.Provider value={{ cartList, setCartList,  addItemToCart, clearCart, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

