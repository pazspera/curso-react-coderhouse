import styles from "./ErrorCard.module.css";
import { Container, Toolbar, Paper, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorCard({title, error}) {

  return (
    <>
      <Container maxWidth="md">
        {/* Fix para el fixed navbar, empuja contenido hacia abajo */}
        <Toolbar />
        <Paper elevation={3} className={styles.errorContainer}> 
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">{title}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">{error}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button size="medium" variant="contained" component={Link} to="/">Volver a la tienda</Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}