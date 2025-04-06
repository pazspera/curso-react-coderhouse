
import styles from "./Item.module.css";
import { Button, 	Card,	CardActionArea,  CardActions,	CardContent,	CardMedia,	Typography, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";

export default function Item({product}) {
  const { addItemToCart } = useContext(CartContext);
  const [loaded, setLoaded] = useState(false);

  const handleAddItem = () => {
    addItemToCart({...product, amount: 1});
  }

	return (
		<>
			<Card className="productCard">
				<CardActionArea component={Link} to={`/item/${product.id}`} className={styles.overflowCardHover}>
          {
            product.stock === 1 && <span className={styles.lastItemWarning}>¡Último disponible!</span>
          }
          {!loaded && (
            <Skeleton variant="rectangular" width={303} height={303}></Skeleton>
          )}
					<CardMedia
						component="img"
						heigth="150"
						image={product.pictureUrl}
						alt={product.title}
            srcSet={
              `${product.pictureUrl.replace(".jpg", "-small.jpg")} 480w,
              ${product.pictureUrl.replace(".jpg", "-medium.jpg")} 768w,
              ${product.pictureUrl.replace(".jpg", "-large.jpg")} 1280w,
              `}
            sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
            className={styles.productCardImg}
            onLoad={()=> setLoaded(true)}
            sx={{ display: loaded ? "block" : "none"}}
					/>

					<CardContent className={styles.productCardContent}>
						<Typography variant="h6" component="h3" align="center" className={styles.productCardTitle}>
							{product.title}
						</Typography>
						<Typography variant="body2" component="p">
							{product.formattedPrice}
						</Typography>
					</CardContent>
				</CardActionArea>
        <CardActions className={styles.cardActions}>
          <Button 
            size="small" 
            variant="contained" 
            stock={1} 
            onClick={handleAddItem} 
            component={Link}
            to="/cart"
            fullWidth>
            Agregar al carrito
          </Button>
        </CardActions>
			</Card>
		</>
	);
}
