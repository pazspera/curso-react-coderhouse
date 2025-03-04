import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { getProductById } from "../../utils/utils";

export default function ItemDetailContainer() {
  const products = [
    {
      id: 1,
      title: "Wingspan",
      pictureUrl: "/img/wingspan.jpg",
      price: 200000,
      description: 'Wingspan es un juego de mesa competitivo y estratégico en el que los jugadores asumen el rol de observadores de aves y buscan atraer distintas especies a sus reservas naturales. A lo largo de la partida, gestionan recursos, colocan cartas de aves en diferentes hábitats (bosque, pradera y humedal) y activan habilidades especiales para obtener alimentos, poner huevos y robar nuevas cartas. Con un diseño visual impresionante y mecánicas equilibradas, Wingspan combina planificación, táctica y un toque de suerte, ofreciendo una experiencia inmersiva para amantes de los juegos de mesa y la naturaleza.'
    },
    {
      id: 2,
      title: "Dune: Imperium",
      pictureUrl: "/img/dune-imperium.jpg",
      price: 250000,
      description: 'Arrakis. Dune. El Planeta del Desierto. Alza tu estandarte por encima del vasto yermo que se extiende ante ti. Ahora que las Grandes Casas del Landsraad reúnen a sus fuerzas y sus espías, ¿a quién influenciarás y a quién traicionarás? Un Emperador tiránico. Las inescrutables Bene Gesserit. La astuta Cofradía Espacial. Los feroces Fremen del Desierto Profundo. El poder del Imperio puede ser tuyo, pero la guerra no es la única forma de hacerse con él. Dune: Imperium combina la construcción de mazos y la asignación de trabajadores en un nuevo juego de estrategia perfectamente ambientado, donde el destino del Imperio depende de tus decisiones. ¿Buscarás aliados políticos o confiarás en la fuerza militar? ¿Supremacía económica o intrigas sutiles? ¿Un asiento en el consejo... o una hoja afilada? Las cartas están echadas. La elección es tuya. El Imperio espera.'
    },
  ]

  const [product, setProduct] = useState(null);

  useEffect(()=> {
    const fetchProductById = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getProductById(products, 1))
      }, 2000);
    });

    fetchProductById
      .then((product) => {
        console.log(product);
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      })


  }, [])

  return  (
    <>
      {product ? (
        <ItemDetail product={product}/>
      ) : (
        <p>Cargando</p>
      )}
    </>
  )

}