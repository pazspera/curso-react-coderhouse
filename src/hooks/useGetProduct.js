import { db } from "../firebase/client";
import { useState , useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

export const useGetProduct = (productId) => {
  const [product, setProduct] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(()=> {
    const getProduct = async () => {
      console.log("en getProduct");
      setLoadingStatus(true);
      
      try {
        const productRef = doc(db, "products", productId);
        const snapshot = await getDoc(productRef);

        if(snapshot.exists()) {
          console.log({ id: snapshot.id, ...snapshot.data()});
          // asignar data a setProduct
          setProduct({ id: snapshot.id, ...snapshot.data()});
        } else {
          console.log("El producto no existe");
        }
        
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingStatus(false);
      }
      
    }

    getProduct();
  }, [productId]);

  return { product, loadingStatus };
}