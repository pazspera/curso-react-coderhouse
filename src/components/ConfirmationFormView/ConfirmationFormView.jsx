import ConfirmationForm from "../ConfirmationForm/ConfirmationForm";
import { Toolbar } from "@mui/material";

export default function ConfirmationFormView() {

  return (
    <>
      {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
      <Toolbar />
      <p>La vista del confirmation form</p>
      <p>Tiene el form para que el usuario ingrese los datos ConfirmationForm</p>
      <p>Y CartSummary que iba a usar originariamente para mostrar info</p>
      <ConfirmationForm></ConfirmationForm>
    </>
  )
}