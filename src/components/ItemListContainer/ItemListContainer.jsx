import { Box, Container, Toolbar, Paper, Grid, Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProducts } from "../../hooks/useGetProducts";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./ItemListContainer.module.css";
import ErrorCard from "../ErrorCard/ErrorCard";

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
      <>
        <ErrorCard title="¡Oh, no! Ocurrió un error" error={error}/>
      </>
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
