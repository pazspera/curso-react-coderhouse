import { useEffect, useState } from "react";

const InputSinVocales = () => {
  // función que se ejecuta onKeyDown
    // verifica si se ingreso vocales y preventsdefault
    const handleInput = (e) => {
      // pasar valor a minúsculas
      let inputValue = e.key.toLowerCase();
      console.log(`inputValue=${inputValue}`);
      console.log("dentro de handleInput");
      console.log(e.key);
      console.log(e.target.value);
      if (inputValue === 'a' || inputValue === 'e'  || inputValue === 'i' || inputValue === 'o' || inputValue === 'u') {
        e.preventDefault();
        console.log("No se pueden ingresar vocales");
        setVocalIngresada(true);
      } else {
        setVocalIngresada(false);
      }
    }
  
    const [vocalIngresada, setVocalIngresada] = useState(false);
    
  useEffect(() => {
    // agregar event listener 
    document.addEventListener("keydown", handleInput);

    // sacar el listener cuando muere el componente
    return () => {
      console.log("borrando event listener");
      document.removeEventListener("keydown", handleInput);
    }
    })

  return (
    <>
      <input type="text" onKeyDown={handleInput}></input> 
      {vocalIngresada && <p>No ingrese vocales, solo consonantes</p>}
    </>
  ) 
}


export default InputSinVocales;