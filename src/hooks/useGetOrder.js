import { db } from "../firebase/client";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";

export const useGetOrder = (orderId) => {
  const [order, setOrder] = useState();
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(()=> {
    const getOrder = async () => {
      setLoadingStatus(true);

      try {
        const orderRef = doc(db, "orders", orderId);
        const snapshot = await getDoc(orderRef);

        if(snapshot.exists()) {
          setOrder({ id: snapshot.id, ...snapshot.data()});
        } else {
          console.log("La orden no existe")
        }

      } catch (error) {
        console.log(error);
      } finally {
        setLoadingStatus(false);
      }
    }

    getOrder();
  }, [orderId]);

  return { order, setLoadingStatus };
}