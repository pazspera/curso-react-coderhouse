import { useEffect } from "react";


const Listener = () => {

  useEffect(() => {
    // Función que se ejecutará cuando ocurre el evento "click"
    const handleClick = () => {
      console.log("Se hizo click en el elemento");
    }

    // Agregar el event listener al montar el componente
    document.addEventListener("click", handleClick);

    // Remover el event listener al desmontar el componente
    // Se ejecuta cuando muere el componente
    return () => {
      console.log("Se está removiendo el event listener");
      document.removeEventListener("click", handleClick);
    }
  })

  return(
    <div>
      <p>Haz click en cualquier lugar para ver el mensaje en consola</p>
    </div>
  )

}

export default Listener;