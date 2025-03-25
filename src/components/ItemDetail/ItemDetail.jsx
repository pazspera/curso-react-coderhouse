import ItemCount from "../ItemCount/ItemCount";
import { Grid, CardMedia, Button, Typography } from "@mui/material";
import { formatPrice } from "../../utils/utils";
import { Link } from "react-router-dom"
import { useNavigateBack } from "../../hooks/useNavigateBack";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({product}) {
  const navigateBack = useNavigateBack("/");
  // itemsInCart se usa para mostrar el ItemCount o btn de terminar compra 
  const [itemsInCart, setItemsInCart] = useState(0);

  // agregar y desestructurar el contexto para usarlo
  const { addItemToCart } = useContext(CartContext);

  const handleAddItem = (amount) => {
    if(amount >=1) {
      setItemsInCart(amount);
      console.log(`Items agregados: ${amount}`)
      console.log(itemsInCart);

      // armar objeto para mandar al cart
      // tiene que tener el objeto de datos y la cantidad separada
      // pasarle el objeto a addItemToCart del contexto
      let itemToAdd = { ...product, amount: amount};
      console.dir(itemToAdd, {depth: null});
      
      addItemToCart(itemToAdd); 
    } 
  }

  
  return (
    <>
      <Grid container rowSpacing={2} sx={{ marginTop: 4, padding: 3, }}>
        <Grid item xs={12} md={5} lg={6}>
          <CardMedia
              component="img"
              image={product.pictureUrl}
              alt={product.title}
              srcSet={
                `${product.pictureUrl.replace(".jpg", "-small.jpg")} 480w,
                ${product.pictureUrl.replace(".jpg", "-medium.jpg")} 768w,
                ${product.pictureUrl.replace(".jpg", "-large.jpg")} 1280w,
                `}
              sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
            />
        </Grid>
        <Grid item xs={12} md={7} lg={6} sx={{display: 'flex', flexDirection: 'column', alignItems:'start', textAlign: 'start', paddingLeft: { md: 5 } }}>
          <Typography variant="h3" gutterBottom>{product.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{formatPrice(product.price)}</Typography>

          {/* ternario para mostrar:
            - ItemCount si no eligió producto
            - Link a cart btn "terminar compra" si hizo click en "agregar a carrito" de ItemCount          
          */}
          {
            itemsInCart > 0 ? (
              <Button size="medium" variant="contained" component={Link} to="/cart">Terminar compra</Button>
            ) : (
              /* agregar función onAdd  */
              <ItemCount stock={product.stock} onAdd={handleAddItem}/>
            )
          }

          <p>{product.stock} artículos disponibles</p>


          <Typography variant="h6">Descripción:</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Button variant="contained" onClick={navigateBack} sx={{marginTop: 4}}>Volver atrás</Button>
        </Grid>
      </Grid>
    </>
  )
}