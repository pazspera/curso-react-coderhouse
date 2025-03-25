import { Box, Typography, Container, Grid, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatPrice } from "../../utils/utils";
import productsData from "../../assets/data/products.json";
import Loader from "../Loader/Loader";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    }) 

    fetchProducts
      .then((data) => {
        const filteredProducts = categoryId 
          ? data.filter((product) => product.categories.includes(categoryId)) 
          : data;
        return filteredProducts;
      })
      .then((filteredProducts) => {
        // console.log(filteredProducts);
        // recorre cards y les agrega la propiedad de formattedPrice
        const updatedFilteredProducts = filteredProducts.map((card) => ({
          ...card,
          formattedPrice: formatPrice(card.price),
        }))
        setProducts(updatedFilteredProducts);
      })
      .catch((err) => {
        console.log(err)
      })

  }, [categoryId]);
  

	return (
		<>
			<Container
				sx={{
					textAlign: "left",
					display: "block",
					minHeight: "auto",
					width: "100%",
				}}
				maxWidth="xl"
			>
				{/* Fix para el fixed navbar, empuja contenido hacia abajo */}
				<Toolbar />

        {products ? (
          <Box sx={{ 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "flex-start",
              width: "100%" 
          }}>
            <ItemList products={products}/>
          </Box>
        ) : (
          <Loader loading={loadingStatus}/>
        )}
			</Container>
		</>
	);
}
