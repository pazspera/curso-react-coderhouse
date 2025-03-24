import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function CartWidget() {
  const {cartList} = useContext(CartContext);
	return (
		<>
			<Badge badgeContent={cartList.length} color="secondary">
				{<ShoppingCartIcon fontSize="medium" sx={{ marginLeft: 2 }} />}
			</Badge>
		</>
	);
}
