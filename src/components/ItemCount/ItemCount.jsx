import { Button, TextField, Box, Input } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ItemCount({ stock, initial = 1, onAdd, variant }) {
	const [itemCount, setItemCount] = useState(Number(initial));
  const { updateItemAmount } = useContext(CartContext);

  // useEffect para actualizar itemCount desde Cart
  useEffect(() => {
    setItemCount(Number(initial));
  }, [initial]);

  // funciones para variant full
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
  // ***

  // funciones para variant compact
  const addItemAndUpdateCart = (e) => {
    if (itemCount < stock) {
      // suma el item y actualiza el cart
      setItemCount((prevCount) =>  {
        const newCount = prevCount + 1;
        // actualiza cart
        updateItemAmount(productId, newCount);
        return newCount;
      })
    }
  }

  const removeItemAndUpdateCart = (e) => {
    if (itemCount > 1) {
      // resta el item y actualiza el cart
      setItemCount((prevCount) => {
        const newCount = prevCount - 1;
        updateItemAmount(productId, newCount);
        return newCount;
      })
    }
  }
  // ***

  // Agregar un condicional para que muestre o no
  // el btn de agregar carrito
  // si no lo muestra, los btn de + y - tienen que llamar a handleInputChange
  // type: full es el que tengo armado ahora
  // type: compact es el chiquito para el cart
  // que le mande la prop type 

	return (
		<>
      {variant === "full" && (
          <>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center", marginBottom: 2 }}>
          
              <Button variant="contained" onClick={removeItem}
              >
                -
              </Button>
              
              <Input value={itemCount} onChange={handleInputChange}
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
      )}

      {variant === "compact" && (
        <>
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", justifyContent: "center", marginBottom: 2 }}>
            <Button variant="contained" onClick={removeItemAndUpdateCart} size="small">
              -
            </Button>
            
            <Input value={itemCount} onChange={handleInputChange} sx={{ width: "70px"}} />

            <Button variant="contained" onClick={addItemAndUpdateCart}   disabled={itemCount === stock} size="small">
              +
            </Button>
          </Box>
        </>
      )}
			
		</>
	);
}
