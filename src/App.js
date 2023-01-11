import './App.css';
import React from 'react';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
//RUTAS
import Home from "./components/HomePage/Home"
import Header from './components/Header/Header';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <NavBar></NavBar>
        <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/Category/:CategoryId' element={<ItemListContainer/>}/>
            <Route exact path='/detail/:productoId' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    )
  }


}

export default App




