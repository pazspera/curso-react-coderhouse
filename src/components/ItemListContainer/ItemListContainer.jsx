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

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  // firestore
  const productRef =  doc(db, "products", "BBHcDKoi1ITLlIyIGJ07");

  const getProduct = () => {
    getDoc(productRef)
      .then((snapshot) => {
        if(snapshot.exists()){
          console.log( { id: snapshot.id, ...snapshot.data()});
        }
      })
      .catch((error) =>{
        console.log(error);
      })
  }

  // get all products
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    const data = await getDocs(productsRef);
    const filteredData = data.docs.map((doc)=> ({...doc.data(), id: doc.id}));
    console.log(filteredData);
  }


  useEffect(() => {
    // getProduct();
    getProducts();
  }, []);


  // getProducts con fetch
/*   useEffect(() => {
    const fetchProducts = async () => { 
      setLoadingStatus(true);
  
      try {
        const data = await new Promise((resolve) => 
          setTimeout(() => resolve(productsData), 2000) 
        );
  
        const filteredProducts = categoryId 
          ? data.filter((product) => product.categories.includes(categoryId))
          : data;
  
        const updatedFilteredProducts = filteredProducts.map((card) => ({
          ...card,
          formattedPrice: formatPrice(card.price),
        }));
  
        setProducts(updatedFilteredProducts);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingStatus(false);
      }
    };
  
    fetchProducts(); 
  }, [categoryId]); */
  

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
