import './App.css';
import React,{useState,useEffect} from 'react';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
//RUTAS
import Home from "./components/HomePage/Home"
import { collection, getDocs } from 'firebase/firestore';
import { db } from './db/firebaseConfig';


function App(){

  const [items, setItems] = useState([]);
    const itemsProducts = collection(db,"productos")

    const getItems= async ()=>{
        const querySnapshot = await getDocs(itemsProducts);
        const docs = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
        setItems(docs)
        }

    useEffect(() => {
    getItems()
    }, []);
    return(
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/productos' element={<ItemListContainer stock={items}/>}/>
            <Route exact path='/Category/:CategoryId' element={<ItemListContainer stock={items}/>}/>
            <Route exact path='/detail/:productoId' element={<ItemDetailContainer stockazo={items}/>}/>
          </Routes>
      </BrowserRouter>
    )
  }


export default App




