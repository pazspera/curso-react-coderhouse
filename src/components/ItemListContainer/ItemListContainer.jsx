import { Box, Container, Toolbar, Paper, Grid, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProducts } from "../../hooks/useGetProducts";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const { products, loadingStatus, error } = useGetProducts(categoryId);
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  useDocumentTitle(categoryId ? `${capitalize(categoryId)} | Caladan Games` : "Caladan Games");

  if(loadingStatus) {
    return <Loader loading={loadingStatus}/>
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


	return (
		<>
			<Container className={styles.mainContainer}	maxWidth="xl">
				{/* Fix para el fixed navbar, empuja contenido hacia abajo */}
				<Toolbar />

        {loadingStatus ? (
          <Loader loading={loadingStatus}/>
        ) : (
          <Box className={styles.itemListContainer}>
            <ItemList products={products}/>
          </Box>
        )}
			</Container>
		</>
	);
}
