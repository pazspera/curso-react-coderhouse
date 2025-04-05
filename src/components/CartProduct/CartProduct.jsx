import styles from "./CartProduct.module.css";
import { Grid, Typography, CardMedia, Box, Skeleton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from "../../context/CartContext";
import { useContext, useState, memo, useRef, useEffect } from "react";

function CartProduct({ id, title, pictureUrlCart }) {
  // nombre producto
  // img producto miniatura
  // total producto = amount.precio (formato precio)
  // btn eliminar items (trash can)
  const { deleteItem } = useContext(CartContext);
  const [loaded, setLoaded] = useState(false);
  const loadedRef = useRef(false);

  // esta función y el useEffect maneja el estado de loaded
  // para que persista y evitar que parpadee cada vez que
  // se modifica ItemCount en Cart
  const handleImageLoad = () => {
    if(!loadedRef.current) {
      loadedRef.current = true;
      setLoaded(true);
    }
  }

  useEffect(() => {
    if (loadedRef.current) {
      setLoaded(true);
    }
  }, []);

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
            image={pictureUrlCart}
            alt={title}
            sx={{ width: 90, height: 90, display: loaded ? "block" : "none" }}
            onLoad={handleImageLoad}
          />
          <Box className={styles.productContainer}>
            <Typography variant="body1">{title}</Typography>
            <DeleteIcon className={styles.deleteIcon} onClick={()=> deleteItem(id)}></DeleteIcon>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default memo(CartProduct);