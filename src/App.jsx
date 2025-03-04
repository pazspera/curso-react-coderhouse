import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {Container} from "@mui/material"


function App() {
	const greeting = "Hola Mundo";

	return (
		<>
			<NavBar />
      <Container maxWidth="xl">
        <ItemListContainer greeting={greeting} />
        <ItemDetailContainer/>
      </Container>
		</>
	);
}

export default App;
