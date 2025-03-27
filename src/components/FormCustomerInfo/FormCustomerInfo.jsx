import { Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function FormCustomerInfo() {
  // al hacer click en finalizar compra, que desmonte cart y 
  // cargue este form para que el usuario cargue datos 
  // un estado para cada input
  // armar un objeto que sea compra que lo envíe con toda la info
  // del cart y del formulario
  

  return (
    <>
      <form>
        <input type="text" placeholder="nombre"></input>
        <input type="tel" placeholder="telefono"></input>
        <input type="email" placeholder="email"></input>
        <Button variant="contained" size="medium">Enviar</Button>
      </form>
    </>
  )
}