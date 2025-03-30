import { useTheme } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartSummary from "../CartSummary/CartSummary";
import { Box, CardMedia, Container, Grid, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, Toolbar, Button, Typography, useMediaQuery } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";
import { formatPrice } from "../../utils/utils";
import ItemCount from "../ItemCount/ItemCount";


export default function Cart() {
  // componente funcional
  const { cartList, totalInCart, clearCart, addItemToCart, deleteItem } = useContext(CartContext);
  const theme = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

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

  const MobileCart = () => {

    return (
      <>
      {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
      <Toolbar />

        <Grid container spacing={1} sx={{ display: "flex", height: "100%", alignItems: "stretch"}}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">Mi carrito</Typography>
          </Grid>

          {cartList.map((product) => (
            <Grid item xs={12} md={6} key={product.id} sx={{ display: "flex", minHeight: "220px"}}>
              <Paper elevation={1} sx={{ padding: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <CardMedia
                    component="img"
                    image={product.pictureUrlCart}
                    alt={product.title}
                    sx={{ width: 90, height: 90}}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Box>
                        <Typography variant="subtitle1">{product.title}</Typography>
                        <Typography variant="body2">{formatPrice(product.price)}</Typography>
                      </Box>
                      <DeleteIcon onClick={()=> deleteItem(product.id)} sx={{ cursor: "pointer"}}></DeleteIcon>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: 2, marginBottom: 1, display: "flex", alignItems: "center", flexDirection: "column", flexGrow: 1 }}> 
                  <ItemCount
                    stock={product.stock}
                    initial={product.amount}
                    variant="compact"
                    productId={product.id}
                  />
                  <Typography variant="body2">
                      Subtotal: {formatPrice(product.price * product.amount)}
                  </Typography>
                  {product.amount === product.stock && product.stock !== 1 && (
                    <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                      Tenemos {product.stock} productos disponibles
                    </Typography>
                  )}
                  {product.stock === 1 && (
                      <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                        ¡Último disponible!
                      </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}

          <Grid item xs={12} md={cartList.length === 1 ? 6 : cartList.length % 2 === 0 ? 12 : 6 } sx={{ minHeight: "220px" }}>
            <Paper elevation={1} sx={{ padding: 2, display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center", gap: 2, minHeight: "100%"}}>
             <Typography variant="" component="h4">Total: {formatPrice(totalInCart)}</Typography> 
             <Button size="medium" variant="contained" fullWidth>Terminar compra</Button>
             <Button onClick={()=> clearCart()} sx={{ color: theme.palette.primary.main, "&:hover": { color: theme.palette.primary.main, backgroundColor: theme.palette.activeColor.main} }}>Vaciar carrito</Button>
            </Paper>
          </Grid>
        </Grid>        
      </>
    )
  }

  const DesktopCart = () => {

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
                    <TableCell colSpan={2} align="center">Total</TableCell>
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

  return (
    <>
      {isMobile ? <MobileCart/> : <DesktopCart/>}
    </>
  )
}