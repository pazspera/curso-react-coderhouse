import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function CartWidget() {
  const {cartList, itemsInCart } = useContext(CartContext);
	return (
		<>
      { itemsInCart > 0 
        ? (
            <Badge badgeContent={itemsInCart} color="secondary">
              {<ShoppingCartIcon fontSize="medium" sx={{ marginLeft: 2 }} />}
            </Badge>
        )
        : (
          <ShoppingCartIcon fontSize="medium" sx={{ marginLeft: 2 }} />
        )

      }
		</>
	);
}
