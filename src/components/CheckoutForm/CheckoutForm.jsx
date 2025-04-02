import { useState, useContext } from "react";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/client";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
 
export default function ConfirmationForm() {
  const [buyer, setBuyer] = useState({ name: '', phone: '', email: ''});
  const { cartList, totalInCart } = useContext(CartContext);
  const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onBlur" });
  console.log(errors);
  
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
  
  const createOrder = (data)=> {
    const order = {
      buyer: data,
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
      <Typography variant="h4" component="h1" sx={{ marginBottom: 3 }}>Completa tus datos</Typography>
      <form onSubmit={handleSubmit(createOrder)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={11}>
            <TextField 
              label="Nombre" 
              variant="filled" 
              type="text"
              onChange={(e)=> onChangeName(e.target.value)}
              fullWidth
              {...register("name", { required: "El campo es obligatorio" })}
            />
            {errors.name && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                {errors.name.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField 
              label="Teléfono" 
              variant="filled" 
              type="tel"
              onChange={(e)=> onChangePhone(e.target.value)}
              fullWidth
              {...register("phone", { required: "El campo es obligatorio", minLength: { value: 8, message: "El teléfono debe tener al menos 8 números"}  })}
            />
            {errors.phone && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                {errors.phone.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={11}>
            <TextField 
              label="Email" 
              variant="filled" 
              type="email"
              onChange={(e)=> onChangeEmail(e.target.value)}
              fullWidth
              {...register("email", { required: "El campo es obligatorio", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Formato de email inválido"} })}
            />
            {errors.email && (
              <Typography variant="body2" color="error" sx={{ marginTop: 1, marginBottom: 1 }}>
                {errors.email.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={11}>
            <Button variant="contained" type="submit"  size="large" fullWidth>
              Finalizar compra
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}