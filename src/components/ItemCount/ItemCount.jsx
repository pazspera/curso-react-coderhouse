import { Button, TextField, Box, Input } from "@mui/material";
import { useState, useEffect } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
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


	return (
		<>
			<Box
				sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center", marginBottom: 2 }}
			>
				
        <Button
					variant="contained"
					onClick={removeItem}
				>
					-
				</Button>
        
				<Input
					value={itemCount}
					onChange={handleInputChange}
				/>

        <Button
					variant="contained"
					onClick={addItem}
					disabled={itemCount === stock}
				>
					+
				</Button>
				
			</Box>

      {/* la arrow function es para que no se ejecute no bien carga el componente */}
			<Button variant="contained" onClick={() => onAdd(itemCount)}>
				Agregar al carrito
			</Button>

		</>
	);
}
