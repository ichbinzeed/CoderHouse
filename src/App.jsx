import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="m-4 ">
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer/> }/>
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    



    </div>
  );
}

export default App;
