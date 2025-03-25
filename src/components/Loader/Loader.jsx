import styles from "./Loader.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

export default function Loader ({loading}) {
  // container full width y height
  // centrado el CircularProgress

  return (
    <>
      {loading ? (
        <Box  className={styles.loaderContainer}>
          <CircularProgress/>
        </Box>
        ) : null}
    </>
  )
}