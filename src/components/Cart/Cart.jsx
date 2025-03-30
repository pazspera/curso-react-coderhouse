import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import { Container, Grid, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, Toolbar, Button, Typography } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";
import { formatPrice } from "../../utils/utils";
import ItemCount from "../ItemCount/ItemCount";
import { useTheme } from "@mui/material/styles";

export default function Cart() {
  // componente funcional
  const { cartList, totalInCart, clearCart, addItemToCart } = useContext(CartContext);
  const theme = useTheme();
  console.log(`cartList.length: ${cartList.length}`)

  // mostrar los productos del carrito
  // todos los items agrupados, sin repetidos
  // borrar items en cada producto, no editar cantidad
  // ruta a carrito
  // mensaje de no hay items con btn a home

  const handleAddItem = (product, amount) => {
    if(amount >=1) {
      console.log(`Items agregados: ${amount}`)

      // armar objeto para mandar al cart
      // tiene que tener el objeto de datos y la cantidad separada
      // pasarle el objeto a addItemToCart del contexto
      let itemToAdd = { ...product, amount: amount};
      
      addItemToCart(itemToAdd); 
    } 
  }

  return (
    <>
      {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
      <Toolbar />
      
      <Grid container spacing={2} gap={1}>
        <Grid item xs={12}>
          <Typography variant="h3" component="h1">Mi carrito</Typography>
        </Grid>

        <Grid item xs={12} lg={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >Producto</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Subtotal</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {cartList.map((product) => (
                  <TableRow key={product.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <CartProduct product={product}></CartProduct>
                    </TableCell>
                    <TableCell align="center">
                      <ItemCount 
                        stock={product.stock} 
                        initial={product.amount}
                        variant="compact" 
                        productId={product.id}
                      >
                      </ItemCount>
                      {product.amount === product.stock && (
                        <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                          Tenemos {product.stock} productos disponibles
                        </Typography>
                      )}
                    </TableCell>
                    {/* <TableCell align="center">{product.amount}</TableCell> */}
                    <TableCell align="center">{formatPrice(product.price)}</TableCell>
                    <TableCell align="center">{formatPrice(product.price * product.amount)}</TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell rowSpan={2}></TableCell>
                  <TableCell colSpan={2} align="center">Subtotal</TableCell>
                  <TableCell align="center">{formatPrice(totalInCart)}</TableCell>
                </TableRow>

                <TableRow sx={{ border: "none" }}>
                  <TableCell rowSpan={2} colSpan={2} sx={{ border: "none" }}>
                    <Button size="medium" variant="contained" fullWidth>Terminar compra</Button>
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=> clearCart()} sx={{ color: theme.palette.primary.main, "&:hover": { color: theme.palette.primary.main, backgroundColor: theme.palette.activeColor.main} }}>Vaciar carrito</Button>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

    </>
  )
}