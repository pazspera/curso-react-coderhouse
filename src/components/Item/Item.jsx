import "./Item.css";
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
			<Card sx={{  height: '100%', position: "relative", display: "flex", flexDirection: "column" }} className="productCard">
				<CardActionArea component={Link} to={`/item/${product.id}`} sx={{ overflow: "hidden", position: "relative"}}>
          {
            product.stock === 1 && <span className="lastItemWarning">¡Último disponible!</span>
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
            className="productCardImg"
            onLoad={()=> setLoaded(true)}
            sx={{ display: loaded ? "block" : "none"}}
					/>

					<CardContent className="productCardContent" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingTop: 2, position: "relative", zIndex: 1, flexGrow: 1 }}>
						<Typography variant="h6" component="h3" align="center" sx={{ lineHeigth: "24px" }}>
							{product.title}
						</Typography>
						<Typography variant="body2" component="p">
							{product.formattedPrice}
						</Typography>
					</CardContent>
				</CardActionArea>
        <CardActions sx={{ marginTop: "auto"}}>
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
        {/* <Button size="small" variant="contained" component={Link} to={`/item/${product.id}`}>Ver más</Button> */}
        </CardActions>
			</Card>
		</>
	);
}
