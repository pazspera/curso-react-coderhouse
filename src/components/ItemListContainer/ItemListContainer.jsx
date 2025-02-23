import { Typography, Container, Grid, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import Item from "../Item/Item";

export default function ItemListContainer({ greeting }) {
	const onAdd = (totalItems) => {
		console.log(`el usuario agregó ${totalItems} items`);
	};

	return (
		<>
			<Container
				sx={{
					textAlign: "left",
					display: "block",
					minHeight: "auto",
					width: "100%",
				}}
				maxWidth="lg"
			>
				{/* Fix para el fixed navbar, empuja contenido hacia abajo */}
				<Toolbar />

				<Typography>{greeting.trim()}</Typography>

				<ItemCount stock={4} initial={1} onAdd={onAdd} />

				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={4}>
						Item 1
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						Item 2
					</Grid>
				</Grid>

				<Item />
			</Container>
		</>
	);
}
