import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greeting = "Hola Mundo!";

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola Mundo"/>
    </>
  )
}

export default App
