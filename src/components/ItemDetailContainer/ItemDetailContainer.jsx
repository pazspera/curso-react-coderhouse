import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProduct } from "../../hooks/useGetProduct";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Container, Toolbar, Paper, Grid, Typography } from "@mui/material";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { product, loadingStatus, error } = useGetProduct(id);
  useDocumentTitle(product ? `${product.title} | Caladan Games` : "Caladan Games");

  if(loadingStatus) {
    return <Loader loading={loadingStatus} />
  }

  if(error) {
    return (
      <Container maxWidth="md">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <Paper elevation={3} className={styles.errorContainer}> 
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">¡Oh, no!</Typography>
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

  return  (
    <>
      <ItemDetail product={product} />
    </>
  )

}