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
          <Route exact path="/estrategia" element={<p>Página de Estrategia</p>} />
          <Route exact path="/familiares" element={<p>Página de Familiares</p>} />
          <Route exact path="/party" element={<p>Página de Party</p>} />
          <Route exact path="/category/:id" element={<ItemListContainer />}></Route>
          <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Container maxWidth="xl">
        <ItemListContainer greeting={greeting} />
        <ItemDetailContainer/>
      </Container> */}
		</>
	);
}

export default App;
