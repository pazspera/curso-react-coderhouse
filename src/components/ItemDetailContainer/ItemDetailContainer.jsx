import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../utils/utils";
import products from "../../assets/data/products.json"

export default function ItemDetailContainer() {

  const [product, setProduct] = useState(null);

  useEffect(()=> {
    const fetchProductById = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProductById(products, 1))
      }, 2000);
    });

    fetchProductById
      .then((product) => {
        console.log(product);
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      })


  }, [])

  return  (
    <>
      {product ? (
        <ItemDetail product={product}/>
      ) : (
        <p>Cargando</p>
      )}
    </>
  )

}