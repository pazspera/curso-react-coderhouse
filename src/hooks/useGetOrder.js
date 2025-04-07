import { db } from "../firebase/client";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

export const useGetOrder = (orderId) => {
  const [order, setOrder] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const getOrder = async () => {
      setLoadingStatus(true);

      try {
        const orderRef = doc(db, "orders", orderId);
        const snapshot = await getDoc(orderRef);

        if(snapshot.exists()) {
          setOrder({ id: snapshot.id, ...snapshot.data()});
        } else {
          setError("El número de orden no existe. Por favor, verificá el id de tu compra y volvé a intentarlo.")
        }

      } catch (error) {
        setError(error);
      } finally {
        setLoadingStatus(false);
      }
    }

    getOrder();
  }, [orderId]);

  return { order, loadingStatus, error };
}