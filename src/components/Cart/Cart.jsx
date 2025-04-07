import { useTheme } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Box, CardMedia, Container, Grid, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, Toolbar, Button, Typography, useMediaQuery } from "@mui/material";
import CartProduct from "../CartProduct/CartProduct";
import { formatPrice } from "../../utils/utils";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

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

        <Grid container spacing={1} className={styles.mainContainerMobile}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h1">Mi carrito</Typography>
          </Grid>

          {cartList.map((product) => (
            <Grid item xs={12} md={6} key={product.id} className={styles.cardMobileContainer}>
              <Paper elevation={1} className={styles.cardMobilePaper}>
                <Box className={styles.cardMobileInnerBox}>
                  <CardMedia
                    component="img"
                    image={product.pictureUrlCart}
                    alt={product.title}
                    className={styles.cardMobileImage}
                  />
                  <Box className={styles.flexGrow}>
                    <Box className={styles.flexCenter}>
                      <Box>
                        <Typography variant="subtitle1">{product.title}</Typography>
                        <Typography variant="body2">{formatPrice(product.price)}</Typography>
                      </Box>
                      <DeleteIcon onClick={()=> deleteItem(product.id)} className={styles.pointer}></DeleteIcon>
                    </Box>
                  </Box>
                </Box>

                <Box className={styles.cardMobileSubtotalContainer}> 
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
                    <Typography variant="body2" color="error" className={styles.spacingNotifications}>
                      Tenemos {product.stock} productos disponibles
                    </Typography>
                  )}
                  {product.stock === 1 && (
                      <Typography variant="body2" color="error" className={styles.spacingNotifications}>
                        ¡Último disponible!
                      </Typography>
                  )}
                </Box>
              </Paper>
            </Grid>
          ))}

          <Grid item xs={12} md={cartList.length === 1 ? 6 : cartList.length % 2 === 0 ? 12 : 6 } className={styles.minHeight}>
            <Paper elevation={1} className={styles.mobileTotalCardContainer}>
             <Typography variant="subtitle1">Total: {formatPrice(totalInCart)}</Typography> 
             <Button size="medium" variant="contained" fullWidth component={Link} to="/checkout">Terminar compra</Button>
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
                    <TableCell align="center">
                      <Typography variant="subtitle1">Producto</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1">Cantidad</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1">Precio</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle1">Subtotal</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {cartList.map((product) => (
                    <TableRow key={product.id} >
                      <TableCell component="th" scope="row">
                        <CartProduct 
                          id={product.id}
                          title={product.title}
                          pictureUrlCart={product.pictureUrlCart}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <ItemCount 
                          stock={product.stock} 
                          initial={product.amount}
                          variant="compact" 
                          productId={product.id}
                        >
                        </ItemCount>
                        {product.stock === 1 && (
                          <Typography variant="body2" color="error"  className={styles.spacingNotificationsDesktop}>
                            ¡Último disponible!
                          </Typography>
                        )}
                        {(product.amount === product.stock) && (product.stock > 1) && (
                          <Typography variant="body2" color="error" className={styles.spacingNotificationsDesktop}>
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
                    <TableCell colSpan={2} align="center">
                      <Typography variant="subtitle2">Total</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2">{formatPrice(totalInCart)}</Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow className={styles.noBorder}>
                    <TableCell rowSpan={2} colSpan={2} className={styles.noBorder}>
                      <Button size="medium" variant="contained" fullWidth component={Link} to="/checkout">Terminar compra</Button>
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