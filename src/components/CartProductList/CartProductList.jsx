import { Grid, Typography } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CartProduct from "../CartProduct/CartProduct";

export default function CartProductList() {
  const { cartList } = useContext(CartContext);

  // consumir el CartContext 
  // iterar cartList
  // armar CardProduct para cada item de la lista


  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2">Productos</Typography>
        </Grid>

        {
          cartList.length > 0 && 
            cartList.map((product) => (
              <CartProduct product={product} key={product.id}></CartProduct>
            ))
        }
      </Grid>
    </>
  )
}