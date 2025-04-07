import { Toolbar, Container, Typography, Paper, Grid, Button } from "@mui/material";
import OrderDetail from "../OrderDetail/OrderDetail";
import { useParams, Link } from "react-router-dom";
import { useGetOrder } from "../../hooks/useGetOrder";
import Loader from "../Loader/Loader";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./OrderView.module.css";

export default function OrderView() {
  const { id } = useParams();
  const { order, loadingStatus, error } = useGetOrder(id);
  useDocumentTitle("Gracias por tu compra | Caladan Games");

  if(loadingStatus) {
    return <Loader loading={loadingStatus}/>
  }

  if(error) {
    return (
      <Container maxWidth="md">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <Paper elevation={3} className={styles.mainContainer}> 
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">¡Oh, no! Ocurrió un error</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">{error}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button size="medium" variant="contained" component={Link} to="/">Volver a la tienda</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
  }

  return (
    <>
      <Container maxWidth="md">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <OrderDetail order={order}></OrderDetail>
      </Container>
    </>
  )
}