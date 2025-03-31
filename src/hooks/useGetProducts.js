import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/client";
import { useState, useEffect } from "react";

export const useGetProducts = ()=> {
  const productsRef = collection(db, "products");
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  

  useEffect(() => {
    const getProducts = async () => {
      setLoadingStatus(true);
  
      try {
        const data = await getDocs(productsRef);
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
  })

  return { products, loading };
}