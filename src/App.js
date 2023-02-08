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
import Productos from './Pages/Productos';
// import Login from './components/Auth/Login';
// import Register from './components/Auth/Register';
// import { auth } from './db/firebaseConfig';
// import { onAuthStateChanged } from 'firebase/auth';
function App(){
    const [items, setItems] = useState([]);
    // const [user, setUser] = useState(null)
    // const [authstate, setAuthState] = useState(null)

    // useEffect(() => {
    //   const unsubscribeAuth = onAuthStateChanged(auth, 
    //     async authenticatedUser =>{
    //       if(authenticatedUser){
    //         setUser(authenticatedUser.email)
    //         setAuthState('home');
    //       }else{
    //         setUser(null)
    //         setAuthState('login');
    //       }
    //     }
    //   )
    //   return unsubscribeAuth
    // },[user])

    const itemsProducts = collection(db,"productos")
    const getItems= async () => {
        const querySnapshot = await getDocs(itemsProducts);
        const docs = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}));
        setItems(docs)
        }
    useEffect(() => {
    getItems()
    }, []);

    // if(authstate === null){return <h1>Cargando....</h1>}
    // if(authstate === "login"){return <Login setAuthState={setAuthState} setUser={setUser}></Login>}
    // if(authstate === "register"){return <Register  setAuthState={setAuthState} setUser={setUser} ></Register>}
    // if(user){return <Home setAuthState={setAuthState} setUser={setUser}> </Home>}

    return(
      <CartContextProvider>
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            {/* <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/> */}
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




