import Cart from "../Cart/Cart";
import { Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography } from "@mui/material"; 
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./CartView.module.css";

export default function CartView() {
  // componente de presentación
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      { itemsInCart === 0 
        ?
          (
            <>
              <Box className={styles.mainContainer}>
                <p>El carrito de compras está vacío</p>
                <Button size="medium" variant="contained" component={Link} to="/">Ver tienda</Button>
              </Box>
            </>
          )
        : (
            <>
              <Container maxWidth="xl">
                <Cart></Cart>
              </Container>
            </>
        )
      }
    </>
  )
}