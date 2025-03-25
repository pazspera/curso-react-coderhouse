import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import { Container, Grid, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";
import { formatPrice } from "../../utils/utils";

export default function Cart() {
  // componente funcional
  const { cartList, totalInCart } = useContext(CartContext);
  console.log(`cartList.length: ${cartList.length}`)


  // mostrar los productos del carrito
  // todos los items agrupados, sin repetidos
  // borrar items en cada producto, no editar cantidad
  // ruta a carrito
  // mensaje de no hay items con btn a home

  return (
    <>
      <Grid container spacing={2} gap={2}>
        <Grid item xs={12} lg={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableCell>Producto</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Subtotal</TableCell>
              </TableHead>

              <TableBody>
                {cartList.map((product) => (
                  <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <CartProduct product={product}></CartProduct>
                    </TableCell>
                    <TableCell>{product.amount}</TableCell>
                    <TableCell>{formatPrice(product.price)}</TableCell>
                    <TableCell>{formatPrice(product.price * product.amount)}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={2}></TableCell>
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="left">{formatPrice(totalInCart)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} lg={3}>
          <CartSummary></CartSummary>
        </Grid>
      </Grid>

    </>
  )
}