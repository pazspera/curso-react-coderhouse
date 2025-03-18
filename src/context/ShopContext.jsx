import { createContext, useState } from "react";

export const ShopComponentContext = ({children}) => {

  const [lista, setLista] = useState([]);

  return(
    <ShopContext.Provider value={{ lista, setLista }}>
      {children}
    </ShopContext.Provider> 
  )
}