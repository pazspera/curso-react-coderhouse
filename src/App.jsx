import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Container} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
	const greeting = "Hola Mundo";

	return (
		<>
      <BrowserRouter>
			  <NavBar />  
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={greeting} />}></Route>
          <Route exact path="/cart" element={<p>carrito</p>}></Route>
          {/* <Route exact path="/category/estrategia" element={<ItemListContainer />} />
          <Route exact path="/category/familiares" element={<ItemListContainer />} />
          <Route exact path="/category/party" element={<ItemListContainer />} /> */}
          <Route exact path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
