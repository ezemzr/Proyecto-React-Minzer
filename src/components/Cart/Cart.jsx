import { addDoc, collection } from 'firebase/firestore';
import React,{useContext,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../db/firebaseConfig';
import { CartContext } from '../Context/CartContext';
import "./Cart.css"
import { doc,getDoc } from 'firebase/firestore';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,} from '@chakra-ui/react'



const Cart = () => {
  const [cart, setCart] =  useContext(CartContext);
  const [idcompra, setIdcompra] = useState([]);
  const [finalizada, setFinalizada] = useState(false);
  const [order, setOrder] = useState([]);
    

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
      setFinalizada(true))
        }
    const getOrder = async () => {
      const itemDocRef = doc(db, "orders", idcompra);
       const itemDoc = await getDoc(itemDocRef)
       if(itemDoc.exists()){
        setOrder(itemDoc.data()) 
        console.log(order);
       }else{
         return null
       }
     }
     useEffect(() => {
       getOrder()
     }, [idcompra])
     
    if (finalizada) {
      return(
      <div className='check'>
        <div class="card">
          <h1>COMPRA FINALIZADA!</h1>
          <p>ID de la compra:{idcompra} </p>
          <p>Total:${order.total}</p>
          <h3>DATOS:</h3>
          {/* <h4>Nombre: {order.Cliente.Nombre}</h4> */}
          {/* <h4>Telefono: {order.Cliente.Telefono}</h4>
          <h4>email: {order.Cliente.email}</h4>
          <h4>Direccion: {order.Cliente.Direccion}</h4> */}
        </div>
      </div>
)}
  
     if(cart.length  > 0){
      return (
    <div className='carroNoVacio'>
    <div className='carritoo'>
      <h1>Carrito</h1>
          <h2>Items en carrito:{quantity}</h2>
              <h3>Total :${PrecioTotal}</h3>
              <div className='compras'>
                <h3>Usted Compro:</h3>
                  {cart.map((prodd) =>{
                  return( 
                  <ul className='conteitem' key={prodd.id}{...prodd}>
                    <li className='itemproducto'>Nombre: <h4> {prodd.Nombre}</h4> </li>
                    <li className='itemproducto'>Precio: <h4>${prodd.Precio}</h4></li>
                    <li className='itemproducto'>Cantidad:<h4>{prodd.quantity}</h4> </li>
                  </ul>)
                  })}
                </div>
                <button className='btn' onClick={() =>{handleClick()}}>
                  Finalizar compra
                </button> 
    </div>
          
      </div>
      )
  } 
return(  
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
  
)
 
}
  
export default Cart;