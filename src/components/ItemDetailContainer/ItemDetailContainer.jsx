import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useGetProduct } from "../../hooks/useGetProduct";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { Container, Toolbar, Paper, Grid, Typography } from "@mui/material";
import ErrorCard from "../ErrorCard/ErrorCard";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const { product, loadingStatus, error } = useGetProduct(id);
  useDocumentTitle(product ? `${product.title} | Caladan Games` : "Caladan Games");

  if(loadingStatus) {
    return <Loader loading={loadingStatus} />
  }

  if(error) {
    return (
      <ErrorCard title="¡Oh, no!" error={error}/>
    )  
  }

  return  (
    <>
      <ItemDetail product={product} />
    </>
  )

}