import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Container} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listener from "./components/Event";
import InputSinVocales from "./components/InputSinVocales";
import { CartComponentContext } from "./context/CartContext";

function App() {
	const greeting = "Hola Mundo";

	return (
		<>
      <BrowserRouter>
        <CartComponentContext>
          <NavBar />  
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={greeting} />}></Route>
            <Route exact path="/cart" element={<p>carrito</p>}></Route>
            <Route exact path="/category/:categoryId" element={<ItemListContainer />}></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route exact path="/events" element={<InputSinVocales />}></Route>
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </CartComponentContext>
      </BrowserRouter>
		</>
	);
}

export default App;
