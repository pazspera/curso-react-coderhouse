import { db } from "../firebase/client";
import { useState , useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

export const useGetProduct = (productId) => {
  const [product, setProduct] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const getProduct = async () => {
      setLoadingStatus(true);
      
      try {
        const productRef = doc(db, "products", productId);
        const snapshot = await getDoc(productRef);

        if(snapshot.exists()) {
          // asignar data a setProduct
          setProduct({ id: snapshot.id, ...snapshot.data()});
        } else {
          setError("No encontramos el producto que estabas buscando. Por favor, volvé a intentarlo.");
        }
        
      } catch (error) {
        setError(error);
      } finally {
        setLoadingStatus(false);
      }
      
    }

    getProduct();
  }, [productId]);

  return { product, loadingStatus, error };
}