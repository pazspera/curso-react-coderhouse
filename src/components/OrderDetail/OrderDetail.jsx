import { Typography, Grid, Paper, Button } from "@mui/material"; 
import { formatPrice } from "../../utils/utils";
import { Link } from "react-router-dom";

export default function OrderDetail({ order }) {
  if(!order) {
    return <p>Cargando orden</p>
  }
  return (
    <>
      <Paper elevation={3} sx={{ margin: 2, padding: 3 }}>
        <Grid container rowSpacing={2} >
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>¡Gracias por tu compra!</Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ marginTop: 1, marginBottom: 1 }}>
            <Typography variant="h6">Datos del comprador: </Typography>
            <Typography variant="body1">Nombre: {order.buyer.name}</Typography>
            <Typography variant="body1">Email: {order.buyer.email}</Typography>
            <Typography variant="body1">Teléfono: {order.buyer.phone}</Typography>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ marginTop: 1, marginBottom: 1 }}>
            <Typography variant="h6">Detalle de la compra: </Typography>
            {/* es necesario formatear la fecha o rompe la vista */}
            <Typography variant="body1">Fecha: {order.date ? order.date.toDate().toLocaleDateString() : undefined}</Typography>
            <Typography variant="body1">ID de la compra: {order.id}</Typography>

            <Typography variant="subtitle1" sx={{ marginTop: 1, marginBottom: 1 }}>Productos: </Typography>
            {order.items.map((product)=> (
              <Typography variant="body1" key={product.id}>
                {product.title} x {product.quantity}: {formatPrice(product.quantity * product.price)} 
              </Typography>
            ))}

            <Typography variant="subtitle1" sx={{ marginTop: 1, marginBottom: 1}}>Total: {formatPrice(order.total)}</Typography>
          </Grid>

          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
            <Button size="medium" variant="contained" component={Link} to="/">Volver a la tienda</Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}