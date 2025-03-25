import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartProductList from "../CartProductList/CartProductList";
import CartSummary from "../CartSummary/CartSummary";
import { Container, Grid, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";

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
      
        <Grid container spacing={2}>
          <Grid item xs={12} md={10}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableCell>Producto</TableCell>
                  <TableCell>Cantidad</TableCell>
                  <TableCell>Precio</TableCell>
                  <TableCell>Subtotal</TableCell>
                </TableHead>

                <TableBody>
                  {cartList.map((product)=> (
                    <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        <CartProduct product={product}></CartProduct>
                      </TableCell>
                      <TableCell>{product.amount}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>{product.price * product.amount}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow>
                    <TableCell rowSpan={2}></TableCell>
                    <TableCell colSpan={2}>Subtotal</TableCell>
                    <TableCell align="left">Número compra</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      
    </>
  )
}