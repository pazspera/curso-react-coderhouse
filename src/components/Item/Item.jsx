import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";


export default function Item() {
	return (
		<>
			<Card sx={{ maxWidth: 250 }}>
				<CardActionArea>
					<CardMedia
						component="img"
						heigth="150"
						image="/img/wingspan.jpg"
						alt="Wingspan"
					/>

					<CardContent>
						<Typography variant="subtitle2" component="h3">
							Wingspan
						</Typography>
						<Typography variant="body2" component="p">
							$200.000
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
}
