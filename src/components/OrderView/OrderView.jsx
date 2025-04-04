import { Toolbar, Container } from "@mui/material";
import OrderDetail from "../OrderDetail/OrderDetail";
import { useParams } from "react-router-dom";
import { useGetOrder } from "../../hooks/useGetOrder";
import Loader from "../Loader/Loader";

export default function OrderView() {
  const { id } = useParams();
  console.log(id);
  const { order, loadingStatus } = useGetOrder(id);

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