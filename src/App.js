import './App.css';
import React,{useState,useEffect} from 'react';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from "./components/ItemDetail/ItemDetail.jsx"
import { Route,Routes,BrowserRouter,  } from 'react-router-dom';
import Home from "./components/HomePage/Home"
import { collection, getDocs } from 'firebase/firestore';
import { db } from './db/firebaseConfig';
import Cart from './components/Cart/Cart';
import Error404 from './components/404/404';
import { CartContextProvider } from './components/Context/CartContext';
import { Auth } from './components/Auth/Auth';
import Productos from './Pages/Productos';

function App(){
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const itemsProducts = collection(db,"productos")
    
    
    const getItems= async () => {
        const querySnapshot = await getDocs(itemsProducts);
        const docs = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
        setItems(docs)
        setLoading(false)
        }

    useEffect(() => {
    getItems()
    }, []);

    if(loading){
      return <h1>Cargando....</h1>
    }
    return(
      <CartContextProvider>
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path='/auth' element={<Auth/>}/>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/productos' element={<Productos items={items} />}/>
            <Route exact path='/Category/:CategoryId' element={<ItemListContainer stock={items} />}/>
            <Route exact path='/detail/:productoId' element={<ItemDetail/>}/>
            <Route path="*" element={<Error404/>}/> 
            <Route exact path="/cart" element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      </CartContextProvider>
        
    )
  }


export default App




