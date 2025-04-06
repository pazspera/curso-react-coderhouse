import { Typography, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { formatPrice } from "../../utils/utils";
import styles from "./CartSummary.module.css";

export default function CartSummary() {
  const { totalInCart, cartList } = useContext(CartContext);
  
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={2} className={styles.noBorder}>
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
              <TableCell className={styles.noBorder}>{`${product.title} x ${product.amount}`}</TableCell>
              <TableCell className={styles.noBorder}>{formatPrice(product.price * product.amount)}</TableCell>
            </TableRow>
            ))}
            <TableRow>
              <TableCell className={styles.borderTop}>
                <Typography variant="subtitle2">Total</Typography>
              </TableCell>
              <TableCell className={styles.borderTop}>
                <Typography variant="subtitle2">{formatPrice(totalInCart)}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}