import { Grid, Typography, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { formatPrice } from "../../utils/utils";

export default function CartSummary() {
  const { totalInCart } = useContext(CartContext);

  return (
    <>
      <Grid container>
        <Grid item>
          <Typography variant="h2">Resumen de compra</Typography>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <TableHead>
          <TableCell>Resumen de compra</TableCell>
          <TableCell></TableCell>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>Subtotal:</TableCell>
            <TableCell>{formatPrice(totalInCart)}</TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>
              <Button size="medium" variant="contained">Terminar compra</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </TableContainer>
    </>
  )
}