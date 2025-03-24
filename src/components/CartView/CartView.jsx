import Cart from "../Cart/Cart";
import { Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"; 
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartProductList from "../CartProductList/CartProductList";
import CartSummary from "../CartSummary/CartSummary";

export default function CartView() {
  // componente de presentación
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      { itemsInCart === 0 
        ?
          (
            <>
              <p>El carrito de compras está vacío</p>
              <Button size="medium" variant="contained" component={Link} to="/">Volver al inicio</Button>
            </>
          )
        : (
            <>
              <Container sx={{ display: "block", minHeight: "auto", width: "100%", textAlign: "left", border: '1px solid red', padding: '0 15px'}} maxWidth="xl">
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
      
    </>
  )
}