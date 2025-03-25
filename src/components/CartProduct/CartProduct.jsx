import { Grid, Typography, CardMedia, Box } from "@mui/material";

export default function CartProduct({product}) {
  // nombre producto
  // img producto miniatura
  // total producto = amount.precio (formato precio)
  // btn eliminar items (trash can)


  return (
    <>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <CardMedia 
            component="img" 
            image={product.pictureUrlCart}
            alt={product.title}
            sx={{ width: 90, height: 90 }}
          />
          <Box>
            <Typography variant="h6">{product.title}</Typography>
            <Typography variant="body2">Cantidad: {product.amount}</Typography>
            <Typography variant="body2">Precio: {product.price}</Typography>
            <Typography variant="body2">Total: {product.price * product.amount}</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  )
}