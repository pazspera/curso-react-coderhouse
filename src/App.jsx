import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Container} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listener from "./components/Event";
import InputSinVocales from "./components/InputSinVocales";
import { CartComponentContext } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
	const greeting = "Hola Mundo";

	return (
		<>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <CartComponentContext>  
          <BrowserRouter>
            <ScrollToTop />
            <NavBar />  
            <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={greeting} />}></Route>
              <Route exact path="/cart" element={<CartView></CartView>}></Route>
              <Route exact path="/category/:categoryId" element={<ItemListContainer />}></Route>
              <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route exact path="/events" element={<InputSinVocales />}></Route>
              <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
          </BrowserRouter>
        </CartComponentContext>
      </ThemeProvider>
		</>
	);
}

export default App;
