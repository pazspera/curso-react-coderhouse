import { Typography, Container, Grid, Toolbar } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export default function ItemListContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
