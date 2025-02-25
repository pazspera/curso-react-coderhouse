import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import EjemploApi from "./components/EjemploApi/EjemploApi";

function App() {
	const greeting = "Hola Mundo";

	return (
		<>
			<NavBar />
			<ItemListContainer greeting={greeting} />
      <EjemploApi/>
		</>
	);
}

export default App;
