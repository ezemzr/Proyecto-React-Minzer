import './App.css';
import React,{useState,useEffect} from 'react';
import { db } from './db/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
//COMPONENTES
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { Route,Routes,BrowserRouter } from 'react-router-dom';
//RUTAS
import Home from "./components/HomePage/Home"

function App(){
    const [items, setitems] = useState([]);
    const [compus, setcompus] = useState([])
    const [celus, setcelus] = useState([])
    const [ipads, setipads] = useState([])
    const itemsMacBook = collection(db,"MacBook")
    const itemsiPads = collection(db,"iPads")
    const itemsiPhones = collection(db,"iPhones")

    const getMacs= async ()=>{
      const querySnapshot = await getDocs(itemsMacBook);
      const docs = querySnapshot.docs.map((doc)=>doc.data());
      setcompus(docs)
    }
    const getIphones= async ()=>{
      const querySnapshot = await getDocs(itemsiPhones);
      const docs = querySnapshot.docs.map((doc)=>doc.data());
      setcelus(docs)
    }
    const getIpads= async ()=>{
      const querySnapshot = await getDocs(itemsiPads);
      const docs = querySnapshot.docs.map((doc)=>doc.data());
      setipads(docs)
    }

    useEffect(() => {
      setitems(items.push(compus,celus,ipads))
      console.log(items);
    }, [compus,celus,ipads,items]);
    



    return(
      <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/productos' element={<ItemListContainer/>}/>
            <Route exact path='/Category/:CategoryId' element={<ItemListContainer/>}/>
            <Route exact path='/detail/:productoId' element={<ItemDetailContainer/>}/>
          </Routes>
      </BrowserRouter>
    )
  }


export default App




