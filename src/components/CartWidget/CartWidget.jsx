import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Badge} from "@mui/material"

export default function CartWidget() {
    return (
        <>
            <Badge badgeContent={3} color='secondary'>
                <ShoppingCartIcon   fontSize="medium"
                sx={{ marginLeft: 2, }} />
            </Badge>
        </>
    );
}