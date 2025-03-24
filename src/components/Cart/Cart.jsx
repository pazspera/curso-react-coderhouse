import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductList from "../CartProductList/CartProductList";
import CartSummary from "../CartSummary/CartSummary";
import { Container, Grid } from "@mui/material";

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
      <Container sx={{ display: "block", minHeight: "auto", width: "100%", textAlign: "left", border: '1px solid red', padding: '0 15px'}} maxWidth="xl" disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <CartProductList></CartProductList>
          </Grid>
          <Grid item xs={12} md={4}>
            <CartSummary></CartSummary>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}