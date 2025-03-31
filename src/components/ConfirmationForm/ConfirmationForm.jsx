import { useState } from "react";

export default function ConfirmationForm() {
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: ''});

  const onChangeName = () => {}


  return (
    <>
      <p>Este es el componente confirmation form</p>
      <form>
        
      </form>
    </>
  )
}