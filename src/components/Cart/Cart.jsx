import { addDoc, collection } from 'firebase/firestore';
import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../db/firebaseConfig';
import { CartContext } from '../Context/CartContext';
import "./Cart.css"

const Cart = () => {
  const [cart, setCart] =  useContext(CartContext);
  const [idcompra, setIdcompra] = useState([]);
  const [finalizada, setFinalizada] = useState(false);
    
  const quantity = cart.reduce((acc,curr)=>{
        return acc + curr.quantity
    },0)

    const PrecioTotal = cart.reduce(
      (acc, curr)=> acc + curr.quantity * curr.Precio,0)

        const Orden = {
          Cliente:{
            Nombre: "Ezequiel",
            email: "ezequielminzer@gmail.com",
            Telefono: "2616326828",
            Direccion: ""
          },
            items:cart.map(product => ({id: product.id, nombre: product.Nombre, Precio: product.Precio, quantity: product.quantity})) ,
            total:`${PrecioTotal}`
        }

        const handleClick = async() => {
              const ordersCollection = collection(db, "orders")
              await addDoc(ordersCollection,Orden)
             .then(({id}) => setIdcompra(id),
             setFinalizada(true),
             console.log(idcompra))
        }
        
          if (finalizada) {
            return(
        <div className='check'>
          <div class="card">
            <p>id de la compra:{idcompra} </p>
          </div>
        </div>
        )} 

      if(cart.length > 0){
        return( 
        <div className='carroNoVacio'>
            <h1>Items in cart:{quantity}</h1>
              <h2>Total : ${PrecioTotal}</h2>
                <button className='btn' onClick={() =>{handleClick()}}>
                  Finalizar compra
                </button>  
        </div>
          )
    }else{
      return (
    <div className='CarroVacio'>
      <p className=''>Carrito vacio...</p>
      <Link to={"/productos"}>
        <button class="cta">
            <span class="hover-underline-animation"> Shop now </span>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
        </button>
      </Link>
      
      
    </div>
  );
    }
  
};

export default Cart;