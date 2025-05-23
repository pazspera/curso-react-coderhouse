import { useState, useContext } from "react";
import { TextField, Button, Grid, Typography, CircularProgress } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/client";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./CheckoutForm.module.css";
 
export default function ConfirmationForm() {
  const { cartList, totalInCart, clearCart } = useContext(CartContext);
  const { register, handleSubmit, formState: {errors} } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();
  const [loadingStatus, setLoadingStatus] = useState(false);
  
  const createOrder = (data)=> {
    // loader para el btn
    setLoadingStatus(true);

    const order = {
      buyer: data,
      items: cartList.map((product) => ({ id: product.id, title: product.title, quantity: product.amount, price: product.price })),
      total: totalInCart,
      date: serverTimestamp(),
    }
    
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({id})=>{
        clearCart();
        navigate(`/order/${id}`);
      })
      .catch((error) => {
        console.log(error);
        // saca loader de btn
        setLoadingStatus(false);
      });
    // guardar el id de la operación para mostrar al usuario
  }

  return (
    <>
      <Typography variant="h3" component="h1" className={styles.mainTitle}>Completa tus datos</Typography>
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
              <Typography variant="body2" color="error" className={styles.error}>
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
              <Typography variant="body2" color="error" className={styles.error}>
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
              <Typography variant="body2" color="error" className={styles.error}>
                {errors.email.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={11}>
            <Button variant="contained" type="submit"  size="large" fullWidth disabled={loadingStatus}> 
              {loadingStatus ? <CircularProgress size={24} color="inherit" /> : "Finalizar compra"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}