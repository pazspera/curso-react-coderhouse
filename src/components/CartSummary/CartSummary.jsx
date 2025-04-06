import { Typography, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { formatPrice } from "../../utils/utils";


export default function CartSummary() {
  const { totalInCart, cartList } = useContext(CartContext);
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="h6">Resumen de compra</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Producto</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Subtotal</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartList.map((product)=> (
              <TableRow key={product.id}>
              <TableCell>{`${product.title} x ${product.amount}`}</TableCell>
              <TableCell>{formatPrice(product.price * product.amount)}</TableCell>
            </TableRow>
            ))}
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>
                <Typography variant="subtitle2">Total</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">{formatPrice(totalInCart)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}