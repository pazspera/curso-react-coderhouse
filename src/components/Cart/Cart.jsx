import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";


export default function Cart() {
  // componente funcional
  const { cartList } = useContext(CartContext);
  console.log(`cartList.length: ${cartList.length}`)


  // mostrar los productos del carrito
  // todos los items agrupados, sin repetidos
  // borrar items en cada producto, no editar cantidad
  // ruta a carrito
  // mensaje de no hay items con btn a home

  return (
    <>
      <h2>El cart</h2>
    </>
  )
}