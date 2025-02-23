import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";


export default function Item({product}) {
	return (
		<>
			<Card sx={{ maxWidth: 250 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						heigth="150"
						image={product.pictureUrl}
						alt={product.title}
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
			</Card>
		</>
	);
}
