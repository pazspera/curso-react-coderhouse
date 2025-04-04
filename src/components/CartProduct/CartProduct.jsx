import styles from "./CartProduct.module.css";
import { Grid, Typography, CardMedia, Box, Skeleton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

export default function CartProduct({product}) {
  // nombre producto
  // img producto miniatura
  // total producto = amount.precio (formato precio)
  // btn eliminar items (trash can)
  const { deleteItem } = useContext(CartContext);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* skeleton de card media */
            !loaded && (
              <Skeleton variant="rectangular" width={90} height={90}></Skeleton>
            )
          }
          <CardMedia 
            component="img" 
            image={product.pictureUrlCart}
            alt={product.title}
            sx={{ width: 90, height: 90, display: loaded ? "block" : "none" }}
            onLoad={()=> setLoaded(true)}
          />
          <Box className={styles.productContainer}>
            <Typography variant="body1">{product.title}</Typography>
            <DeleteIcon className={styles.deleteIcon} onClick={()=> deleteItem(product.id)}></DeleteIcon>
          </Box>
        </Box>
      </Grid>
    </>
  )
}