import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartComponentContext } from "./context/CartContext";
import CartView from "./components/CartView/CartView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CheckoutView from "./components/CheckoutView/CheckoutView";
import OrderView from "./components/OrderView/OrderView";
import useDocumentTitle from "./hooks/useDocumentTitle";
import ErrorCard from "./components/ErrorCard/ErrorCard";

function App() {
	  useDocumentTitle("Caladan Games");

	return (
		<>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartComponentContext>  
          <BrowserRouter>
            <ScrollToTop />
            <NavBar />  
            <Routes>
              <Route exact path="/" element={<ItemListContainer />}></Route>
              <Route path="/cart" element={<CartView></CartView>}></Route>
              <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
              <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route path="/checkout" element={<CheckoutView/>}></Route>
              <Route path="/order/:id" element={<OrderView />}></Route>
              <Route path="*" element={<ErrorCard title="Error 404" error="No encontramos la página que estabas buscando. Por favor, intentá nuevamente."/>}></Route>
            </Routes>
          </BrowserRouter>
        </CartComponentContext>
      </ThemeProvider>
		</>
	);
}

export default App;
