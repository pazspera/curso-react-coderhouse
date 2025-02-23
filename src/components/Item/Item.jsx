import "./Item.css";
import {
  Button,
	Card,
	CardActionArea,
  CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";


export default function Item({product}) {
	return (
		<>
			<Card sx={{  height: '100%' }} className="productCard">
				<CardActionArea>
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
          <Button size="small" variant="contained">Ver más</Button>
        </CardActions>
			</Card>
		</>
	);
}
