import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";
import { useState, useEffect } from "react";

export const useGetProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoadingStatus(true);
  
      try {
        const productsRef = collection(db, "products");

        // catergoryId es un array de strings con las categorías
        // si vienen categorias, filtramos usándolas
        let categoryQuery;
        if(categoryId && categoryId.length > 0) {
          categoryQuery = query(
            productsRef,
            where("categories", "array-contains", categoryId)
          )
        } else {
          categoryQuery = productsRef;
        }

        const data = await getDocs(categoryQuery);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(), 
          id: doc.id
        }));
        setProducts(filteredData);
      } catch (error) {
        console.log(error);
      } finally  {
        setLoadingStatus(false);
      }
      
    }

    getProducts();
  }, [categoryId]);

  return { products, loadingStatus };
}