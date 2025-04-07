import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/client";
import { useState, useEffect } from "react";

export const useGetProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [error, setError] = useState(null);
  // poner db a null sirve para testear el error
  // const db = null;

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
        setError("Ocurrió un error al cargar nuestro catálogo. Por favor, intentá nuevamente.")
      } finally  {
        setLoadingStatus(false);
      }
      
    }

    getProducts();
  }, [categoryId]);

  return { products, loadingStatus, error };
}