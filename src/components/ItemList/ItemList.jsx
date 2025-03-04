import Item from "../Item/Item";
import { useEffect , useState} from "react";
import { Grid } from "@mui/material";
import { formatPrice } from "../../utils/utils"


export default function ItemList() {
  const cards = [
    {
      id: 1,
      title: "Wingspan",
      pictureUrl: "/img/wingspan.jpg",
      price: 200000
    },
    {
      id: 2,
      title: "Dune: Imperium",
      pictureUrl: "/img/dune-imperium.jpg",
      price: 250000
    },
    {
      id: 3,
      title: "Aventureros al tren Europa",
      pictureUrl: "/img/aventureros-tren-europa.jpg",
      price: 100000
    },
    {
      id: 4,
      title: "Catán",
      pictureUrl: "/img/catan.jpg",
      price: 95000
    }
  ];

  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    const fetchCards = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(cards);
      }, 2000);
    })

    fetchCards
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