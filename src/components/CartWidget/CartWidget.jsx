import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
  const {cartList, itemsInCart } = useContext(CartContext);
	return (
		<>
      { itemsInCart > 0 
        ? (
            <Badge badgeContent={itemsInCart} color="secondary">
              {<ShoppingCartIcon fontSize="medium" className={styles.cartWidgetIcon} />}
            </Badge>
        )
        : (
          <ShoppingCartIcon fontSize="medium" className={styles.cartWidgetIcon} />
        )

      }
		</>
	);
}
