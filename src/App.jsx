import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Zweibeiner</h1>
      <ItemListContainer greeting="Hola mundo"></ItemListContainer>
    </div>
  );
}

export default App;
