import ItemCount from "../ItemCount/ItemCount";
import { Grid, CardMedia, Button, Typography } from "@mui/material";
import { formatPrice } from "../../utils/utils";
import { Link } from "react-router-dom"
import { useNavigateBack } from "../../hooks/useNavigateBack";

export default function ItemDetail({product}) {
  const navigateBack = useNavigateBack("/");

  return (
    <>
      <Grid container rowSpacing={2} sx={{ marginTop: 4, padding: 3, }}>
        <Grid item xs={12} md={5} lg={6}>
          <CardMedia
              component="img"
              image={product.pictureUrl}
              alt={product.title}
              srcSet={
                `${product.pictureUrl.replace(".jpg", "-small.jpg")} 480w,
                ${product.pictureUrl.replace(".jpg", "-medium.jpg")} 768w,
                ${product.pictureUrl.replace(".jpg", "-large.jpg")} 1280w,
                `}
              sizes="(max-width: 600px) 480px, (max-width: 960px) 768px, 1280px"
            />
        </Grid>
        <Grid item xs={12} md={7} lg={6} sx={{display: 'flex', flexDirection: 'column', alignItems:'start', textAlign: 'start', paddingLeft: { md: 5 } }}>
          <Typography variant="h3" gutterBottom>{product.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{formatPrice(product.price)}</Typography>
          <ItemCount stock={product.stock} />
          <Typography variant="h6">Descripción:</Typography>
          <Typography variant="body1">{product.description}</Typography>
          <Button variant="contained" onClick={navigateBack} sx={{marginTop: 4}}>Volver atrás</Button>
        </Grid>
      </Grid>
    </>
  )
}