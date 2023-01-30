import './App.css';
import React,{useState,useEffect} from 'react';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
//RUTAS
import Home from "./components/HomePage/Home"
import { ItemsProvider } from './components/ItemsContext';



function App(){
    return(
      <ItemsProvider>
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/Category/:CategoryId' element={<ItemListContainer/>}/>
            <Route exact path='/detail/:productoId' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
      </ItemsProvider>
      
    )
  }


export default App




