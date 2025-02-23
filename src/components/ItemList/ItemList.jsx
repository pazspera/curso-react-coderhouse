import Item from "../Item/Item";
import { useEffect , useState} from "react";
import {Container} from "@mui/material";


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
      title: "The Red Cathedral",
      pictureUrl: "/img/red-cathedral.jpg",
      price: 60000
    },
    {
      id: 4,
      title: "Catán",
      pictureUrl: "/img/catan.png",
      price: 95000
    }
  ];

  const [products, setProducts] = useState([]);

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS"
    }).format(price);
    return formattedPrice;
  }

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
      <Container>
        {products.map((card) => (
          <Item product={card} key={card.id}/>
        ))}
      </Container>
    </>
  )
}