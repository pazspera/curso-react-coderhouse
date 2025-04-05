import { Toolbar, Container } from "@mui/material";
import OrderDetail from "../OrderDetail/OrderDetail";
import { useParams } from "react-router-dom";
import { useGetOrder } from "../../hooks/useGetOrder";
import Loader from "../Loader/Loader";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function OrderView() {
  const { id } = useParams();
  const { order, loadingStatus } = useGetOrder(id);
  useDocumentTitle("Gracias por tu compra | Caladan Games");

  return (
    <>
      {loadingStatus || !order ? (
        <Loader loading={loadingStatus}/>
      ) : (
        <Container maxWidth="md">
          {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
          <Toolbar />

          <OrderDetail order={order}></OrderDetail>
        </Container>
      )
      }
    </>
  )
}