import { Typography } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
export default function ItemListContainer({greeting}) {
    const onAdd = (totalItems) => {
        console.log(`el usuario agregó ${totalItems} items`);
    }

    return (
        <>
            <Typography>
                {greeting.trim()}
            </Typography>
            
            <ItemCount stock={4} initial={1} onAdd={onAdd}/>
        </>
    );
}