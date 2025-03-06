import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../utils/utils";
import products from "../../assets/data/products.json";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  if(id) {
    console.log(`id en ItemListContainer: ${id}`)
  }

  useEffect(()=> {
    const fetchProductById = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProductById(products, Number(id)))
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
  }, [id])

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