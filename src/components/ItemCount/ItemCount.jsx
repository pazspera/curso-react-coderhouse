import { Button, TextField, Box, Input } from "@mui/material";
import { useState, useEffect } from "react";

export default function ItemCount({ stock, initial }) {
	const [itemCount, setItemCount] = useState(Number(initial));

	const addItem = () => {
		if (itemCount < stock) {
			setItemCount((prevCount) => prevCount + 1);
		}
	};

	const removeItem = () => {
		if (itemCount > 1) {
			setItemCount((prevCount) => prevCount - 1);
		}
	};

	const handleInputChange = (e) => {
		const newValue = parseInt(e.target.value);
		if (newValue > stock) {
			setItemCount(stock);
		}
		if (newValue < stock && newValue >= 1) {
			setItemCount(newValue);
		}
	};

	const onAdd = () => {
		if (stock >= 1) {
			console.log(`El usuario ingresó ${itemCount} items`);
		}
	};

	return (
		<>
			<Box
				sx={{ display: "flex", gap: 2, alignItems: "center", marginBottom: 2 }}
			>
				<Button
					variant="contained"
					onClick={addItem}
					disabled={itemCount === stock}
				>
					+
				</Button>

				<Input
					value={itemCount}
					sx={{ color: "white" }}
					onChange={handleInputChange}
				/>

				{console.log(stock)}
				<Button
					variant="contained"
					onClick={removeItem}
				>
					-
				</Button>
			</Box>
			<Button variant="contained" onClick={() => onAdd(itemCount)}>
				Agregar al carrito
			</Button>

			<p>Stock: {stock}</p>
			<p>itemCount: {itemCount}</p>
		</>
	);
}
