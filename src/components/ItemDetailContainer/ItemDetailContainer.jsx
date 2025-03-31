import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../utils/utils";
import products from "../../assets/data/products.json";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProduct } from "../../hooks/useGetProduct";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { product, loadingStatus } = useGetProduct(id);

  return  (
    <>
      {loadingStatus ? (
        <Loader loading={loadingStatus} />
      ) : (
        <ItemDetail product={product} />
      )}
    </>
  )

}