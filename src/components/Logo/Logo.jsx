import styles from "./Logo.module.css";
import { Box, CardMedia } from "@mui/material";

export default function Logo() {

  return (
    <>
      <Box className={styles.mainContainer}>
        <Box className={styles.hidden}>
          <CardMedia 
            component="img"
            width="48px"
            image="/favicon.png"
            className={styles.logoIcon}
          />
        </Box>
        <Box className={styles.logoContainer}>
          <span className={styles.logoText}>Caladan Games</span>
        </Box>
      </Box>
    </>
  )
}