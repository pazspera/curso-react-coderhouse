import Item from "../Item/Item";
import { useEffect , useState} from "react";
import { Grid } from "@mui/material";
import { formatPrice } from "../../utils/utils";
import productsData from "../../assets/data/products.json";

export default function ItemList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    }) 

    fetchProducts
      .then((cards) => {
        console.log(cards);
        // recorre cards y les agrega la propiedad de formattedPrice
        const updatedCards = cards.map((card) => ({
          ...card,
          formattedPrice: formatPrice(card.price),
        }))
        setProducts(updatedCards);
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);


  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={{ xs:0, sm:0, md: 3}}>
        {products.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card.id}>
            <Item product={card} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}  