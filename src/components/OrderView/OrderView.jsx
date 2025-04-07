import { Toolbar, Container, Typography, Paper, Grid, Button } from "@mui/material";
import OrderDetail from "../OrderDetail/OrderDetail";
import { useParams, Link } from "react-router-dom";
import { useGetOrder } from "../../hooks/useGetOrder";
import Loader from "../Loader/Loader";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import styles from "./OrderView.module.css";
import ErrorCard from "../ErrorCard/ErrorCard";

export default function OrderView() {
  const { id } = useParams();
  const { order, loadingStatus, error } = useGetOrder(id);
  useDocumentTitle("Gracias por tu compra | Caladan Games");

  if(loadingStatus) {
    return <Loader loading={loadingStatus}/>
  }

  if(error) {
    return (
      <ErrorCard title="¡Oh, no! Ocurrió un error" error={error}/>
    )
  }

  return (
    <>
      <Container maxWidth="md">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <OrderDetail order={order}></OrderDetail>
      </Container>
    </>
  )
}