import { Box, Typography, Container, Grid, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/utils";
import productsData from "../../assets/data/products.json";
import Loader from "../Loader/Loader";
import { getDoc, getDocs, collection, query, where, limit , doc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useGetProducts } from "../../hooks/useGetProducts";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const { products, loadingStatus } = useGetProducts();
  
	return (
		<>
			<Container
				sx={{
					textAlign: "left",
					display: "block",
					minHeight: "auto",
					width: "100%",
          paddingBottom: "48px"
				}}
				maxWidth="xl"
			>
				{/* Fix para el fixed navbar, empuja contenido hacia abajo */}
				<Toolbar />

        {loadingStatus ? (
          <Loader loading={loadingStatus}/>
        ) : (
          <Box sx={{ 
            display: "flex", 
            flexWrap: "wrap", 
            justifyContent: "flex-start",
            width: "100%" 
        }}>
          <ItemList products={products}/>
        </Box>
        )}
			</Container>
		</>
	);
}
