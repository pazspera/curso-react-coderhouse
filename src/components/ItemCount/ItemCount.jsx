import { Button, Box, Input } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./ItemCount.module.css";

export default function ItemCount({ stock, initial = 1, onAdd, variant, productId }) {
	const [itemCount, setItemCount] = useState(Number(initial));
  const { updateItemAmount } = useContext(CartContext);
  // valor string para permitir que el usuario borre el número de input y ponga el total que quiere
  const [inputValue, setInputValue] = useState(String(initial));

  // useEffect para actualizar itemCount desde Cart
  useEffect(() => {
    setItemCount(Number(initial));
  }, [initial]);

  useEffect(()=> {
    setInputValue(String(itemCount));
  }, [itemCount]);

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
		const newValue = e.target.value;
    if(newValue === "") {
      setInputValue("");
      return;
    }

    setInputValue(newValue);
	};

  // handleInputBlur maneja la validación del input una vez que el usuario deja de escribir en el input
  const handleInputOnBlur = () => {
    const enteredValue = parseInt(inputValue);
    
    if(inputValue === "") {
      setInputValue(String(itemCount));
      return;
    }
    
    if(!isNaN(enteredValue)) {
      if(enteredValue < 1) {
        setItemCount(1);
        setInputValue("1");
        updateItemAmount(productId, 1);
      } else if (enteredValue > stock) {
        setItemCount(stock);
        setInputValue(String(stock));
        updateItemAmount(productId, stock);
      } else {
        setItemCount(enteredValue);
        updateItemAmount(productId, enteredValue);
      }
    } else {
      // vuelve al valor anterior en caso de que el input esté vacío
      setInputValue(String(itemCount));
    }
  }



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
    } else {
      // si agrega más del stock, que muestre el máximo de stock disponible y actualice cart
      setItemCount(stock);
      updateItemAmount(productId, stock);
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
            <Box className={styles.itemCount}>
          
              <Button variant="contained" onClick={removeItem}>
                -
              </Button>
              
              <Input value={inputValue} onChange={handleInputChange} onBlur={handleInputOnBlur}
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
          <Box className={styles.itemCount}>
            <Button variant="contained" onClick={removeItemAndUpdateCart} size="small">
              -
            </Button>
            
            <Input value={inputValue} onChange={handleInputChange} className={styles.inputCompact} onBlur={handleInputOnBlur} />

            <Button variant="contained" onClick={addItemAndUpdateCart}   disabled={itemCount === stock} size="small">
              +
            </Button>
          </Box>
        </>
      )}
			
		</>
	);
}
