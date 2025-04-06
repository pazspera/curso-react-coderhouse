import { Box, Container, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProducts } from "../../hooks/useGetProducts";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const { products, loadingStatus } = useGetProducts(categoryId);
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  useDocumentTitle(categoryId ? `${capitalize(categoryId)} | Caladan Games` : "Caladan Games");
   
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
