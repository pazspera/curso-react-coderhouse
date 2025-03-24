import Cart from "../Cart/Cart";
import { Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"; 
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


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
              <Cart></Cart>
            </>
        )
      }
      
    </>
  )
}