import {Button, TextField} from "@mui/material";
import {useState, useEffect} from "react";

export default function ItemCount () {
    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {

    }, [setItemCount]);

    const addItem = () => {
        setItemCount(itemCount + 1);
    }

    const removeItem = () => {
        if(itemCount > 1) {
            setItemCount(itemCount - 1);
        }
    }

    return (
        <>
            <Box>
                <Button variant="contained" onClick="addItem">+</Button> 
        
                <Button variant="contained" onClick="removeItem">-</Button>
            </Box>
        </>
    )
}