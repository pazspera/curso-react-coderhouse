import CheckoutForm from "../CheckoutForm/CheckoutForm";
import CartSummary from "../CartSummary/CartSummary";
import { Toolbar, Grid, Container } from "@mui/material";
import useDocumentTitle from "../../hooks/useDocumentTitle";

export default function ConfirmationFormView() {
  useDocumentTitle("Checkout | Caladan Games");

  return (
    <>
      <Container maxWidth="xl">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />

        <Grid container rowSpacing={2}>
          <Grid item xs={12} md={7}>
            <CheckoutForm></CheckoutForm>
          </Grid>
          <Grid item xs={12} md={5}>
            <CartSummary></CartSummary>
          </Grid>
        </Grid>
      </Container>
      
    </>
  )
}