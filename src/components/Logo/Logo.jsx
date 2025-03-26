import styles from "./Logo.module.css";
import { Box, CardMedia } from "@mui/material";

export default function Logo() {

  return (
    <>
      <Box>
        <CardMedia 
          component="img"
          height="64"
          image=""
        />
        <Box>
          <span>Juegos, dados y</span>
          <span>dos armas humeantes</span>
        </Box>
      </Box>
    </>
  )
}