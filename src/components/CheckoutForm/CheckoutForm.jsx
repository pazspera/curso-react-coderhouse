import { useState, useContext } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
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
  
  const createOrder = (e)=> {
    e.preventDefault();
    console.log("previne el default")
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
      <Typography variant="h4" component="h1">Completa tus datos</Typography>
      <form onSubmit={(e) => createOrder(e)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label="Nombre" 
              variant="filled" 
              type="text"
              onChange={(e)=> onChangeName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Teléfono" 
              variant="filled" 
              type="tel"
              onChange={(e)=> onChangePhone(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Email" 
              variant="filled" 
              type="email"
              onChange={(e)=> onChangeEmail(e.target.value)}
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit" fullWidth>
            Finalizar compra
          </Button>
        </Grid>
      </form>
    </>
  )
}