import { Toolbar, Container } from "@mui/material";
import OrderDetail from "../OrderDetail/OrderDetail";

export default function OrderView() {

  return (
    <>
      <Container maxWidth="xl">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <p>Soy la order View</p>

        <OrderDetail></OrderDetail>
      </Container>
    </>
  )
}