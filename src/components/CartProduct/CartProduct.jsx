import { Grid, Typography } from "@mui/material";

export default function CartProduct({product}) {

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="p">Cantidad: {product.amount}</Typography>
        <Typography variant="p">Precio: {product.price}</Typography>
      </Grid>
    </>
  )
}