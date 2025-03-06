import { Typography, Container, Grid, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


export default function ItemListContainer() {
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
				maxWidth="xl"
			>
				{/* Fix para el fixed navbar, empuja contenido hacia abajo */}
				<Toolbar />

        <ItemList/>
			</Container>
		</>
	);
}
