import "./Item.css";
import { Button, 	Card,	CardActionArea,  CardActions,	CardContent,	CardMedia,	Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function Item({product}) {
  const { addItemToCart } = useContext(CartContext);

  const handleAddItem = () => {
    addItemToCart({...product, amount: 1});
  }

	return (
		<>
			<Card sx={{  height: '100%' }} className="productCard">
				<CardActionArea component={Link} to={`/item/${product.id}`}>
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
					/>

					<CardContent>
						<Typography variant="subtitle2" component="h3">
							{product.title}
						</Typography>
						<Typography variant="body2" component="p">
							{product.formattedPrice}
						</Typography>
					</CardContent>
				</CardActionArea>
        <CardActions>
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
