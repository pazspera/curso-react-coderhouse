import Item from "../Item/Item";
import { useEffect , useState} from "react";
import { Grid } from "@mui/material";
import productsData from "../../assets/data/products.json";
import { Link } from "react-router-dom"

export default function ItemList({products}) {

  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs:0, sm:0, md: 3}} justifyContent={'flex-start'}>
        {
          products.length > 0 ? (
            products.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card.id}>
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