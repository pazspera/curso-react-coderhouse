import { useState, useContext } from "react";
import { TextField, Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { CartContext } from "../../context/CartContext";

export default function ConfirmationForm() {
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: ''});
  const { cartList, totalInCart } = useContext(CartContext);
  console.log(cartList);

  const onChangeName = (name) => {
    setBuyer({ ...buyer, name });
    console.log({ ...buyer, name });
  }
  
  const onChangePhone = (phone) => {
    setBuyer({ ...buyer, phone });
    console.log({ ...buyer, phone });
  }
  
  const onChangeEmail = (email) => {
    setBuyer({ ...buyer, email });
    console.log({ ...buyer, email });
  }
  
  const createOrder = ()=> {
    const order = {
      buyer,
      items: cartList.map((product) => ({ id: product.id, title: product.title, quantity: product.amount, price: product.price })),
      total: totalInCart,
    }
    console.log(order);

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({id})=> console.log(id));
    // guardar el id de la operación para mostrar al usuario
  }

  return (
    <>
      <p>Este es el componente confirmation form</p>
      <p>Carrito:</p>
      {cartList.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <p>Cantidad: {product.amount}</p>
          <p>Total: {product.price * product.amount}</p>
        </div>
      ))}
      <form>
        <TextField 
          label="Nombre" 
          variant="filled" 
          type="text"
          onChange={(e)=> onChangeName(e.target.value)}
        />
        <TextField 
          label="Teléfono" 
          variant="filled" 
          type="tel"
          onChange={(e)=> onChangePhone(e.target.value)}
        />
        <TextField 
          label="Email" 
          variant="filled" 
          type="email"
          onChange={(e)=> onChangeEmail(e.target.value)}
        />

        <Button 
          variant="contained" 
          onClick={()=> createOrder()}
        >
          Finalizar compra
        </Button>
      </form>
    </>
  )
}