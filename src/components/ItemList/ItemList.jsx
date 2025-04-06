import Item from "../Item/Item";
import { Grid } from "@mui/material";


export default function ItemList({products}) {
  const isSingleItem = products.length === 1;
  
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs:0, sm:0, md: 3}} justifyContent={'flex-start'}>
        {
          products.length > 0 ? (
            products.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card.id} sx={isSingleItem ? { width: 'auto', flexBasis: 'calc(25% - 1rem)' } : {}}>
                  <Item product={card} />
              </Grid>
            ))
          ) : (
            <p>Cargando</p>
          )
        }
      </Grid>
    </>
  )
}  