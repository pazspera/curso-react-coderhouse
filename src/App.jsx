import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listener from "./components/Event";
import InputSinVocales from "./components/InputSinVocales";
import { CartComponentContext } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CheckoutView from "./components/CheckoutView/CheckoutView";
import OrderView from "./components/OrderView/OrderView";

function App() {
	const greeting = "Hola Mundo";

	return (
		<>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartComponentContext>  
          <BrowserRouter>
            <ScrollToTop />
            <NavBar />  
            <Routes>
              <Route exact path="/" element={<ItemListContainer greeting={greeting} />}></Route>
              <Route path="/cart" element={<CartView></CartView>}></Route>
              <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
              <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/events" element={<InputSinVocales />}></Route>
              <Route path="/checkout" element={<CheckoutView/>}></Route>
              <Route path="/order/:id" element={<OrderView />}></Route>
              <Route path="*" element={<h1>404 Not Found</h1>}></Route>
            </Routes>
          </BrowserRouter>
        </CartComponentContext>
      </ThemeProvider>
		</>
	);
}

export default App;
