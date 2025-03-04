import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
	const greeting = "Hola Mundo";

	return (
		<>
			<NavBar />
			<ItemListContainer greeting={greeting} />
      <ItemDetailContainer/>
		</>
	);
}

export default App;
