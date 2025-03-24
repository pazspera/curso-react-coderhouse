import Cart from "../Cart/Cart";
import { Grid, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"; 
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";
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
            <Container>
              <Grid container rowSpacing={2} sx={{marginTop: 4, padding: 3, border: '1px solid red'}}>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell>Producto</TableCell>
                        <TableCell>Producto</TableCell>                  
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </Grid>
            </Container>
        )
      }
      
    </>
  )
}