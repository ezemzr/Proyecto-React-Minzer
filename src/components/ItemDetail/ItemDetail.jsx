import React,{useState,useEffect,useContext} from 'react'
import "./ItemDetail.css"
import { Button,WrapItem,Divider } from '@chakra-ui/react'
import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../../db/firebaseConfig';
import { CartContext } from '../Context/CartContext';


const ItemDetail = () => {
  const [item,setItem] = useState({});
  const [cart, setCart]  = useContext(CartContext);
  const { productoId } = useParams();
  
  const getItem = async () => {
   const itemDocRef = doc(db, "productos", productoId);
    const itemDoc = await getDoc(itemDocRef)
    if(itemDoc.exists()){
      setItem(itemDoc.data()) 
    }else{
      return null
    }
  }
  
  const quantity = cart.reduce((acc,curr)=>{
    return acc + curr.quantity
},0)

const PrecioTotal = cart.reduce(
  (acc, curr)=> acc + curr.quantity * curr.Precio,0)

  const addToCart = ()=>{
    setCart((currItems)=>{
        const isItemsFound =  currItems.find((item)=> item.id === productoId)
        if(isItemsFound){
            return currItems.map((item)=>{
                if(item.id===productoId){
                    return{...item, quantity: item.quantity + 1}
                }else{
                    return item
                }
        })
        }else{
            return[...currItems, {productoId, quantity: 1 }]
        }
    })
}

 

  useEffect(() => {
    getItem(productoId)
  }, [productoId]);
  
  return (
    <div className='container'>
      <div className='primerDiv'>      
        <img className='imagenDetalle' alt='ProductoApple' src={item.img}></img>
      </div>
      <Divider className='divisor' orientation='horizontal' />      
      <div className='segundoDiv'>
        <h1 className='productoo'>{item.Nombre}</h1>
        <h3 className='precioo'>${item.Precio}</h3>
          <button type="button" className='btnnuno'></button>
          <button type="button" className='btnndos'></button>
          <button type="button" className='btnntres'></button>
          <button type="button" className='btncuatro'></button>
          <button type="button" className='btnncinco'></button>
        <h3>Almacenamiento:</h3>
        <div className='botoness'>
          <Button colorScheme='cyan' variant='outline'>
          128GB
        </Button>
        <Button colorScheme='cyan' variant='outline'>
        256GB
        </Button>
        <Button colorScheme='cyan' variant='outline'>
        512GB
        </Button>
        <Button colorScheme='cyan' variant='outline' onClick={()=>console.log(item)}>
        1024GB
        </Button>
        </div>
        <div className='decrip'>
          <h2>Descripcion</h2>
          <p>{item.Descripcion}</p>
        </div>
      </div>
      <div className='tercerDiv'>
        <div className='titulodiv'>
          <h1 className='Titulo'>Features</h1>
        </div>
        <div>
          <ul className='lista'>
            <li className='itemlist'>Lanzamiento: {item.Lanzamiento}</li>
            <li className='itemlist'>                    
              <GiSmartphone className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>     {item.Pantalla}
            </li>
            <li className='itemlist'>                     
              <CgSmartphoneRam className=" primersvg text-black text-4xl mb-5 mr-2"/> 
               {item.Chip}
            </li>
            <li className='itemlist'>
              <RiCameraLensLine className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                  {item.Camara}
              </li>
          </ul> 
        </div>
          <WrapItem className='botoncontainer'>
            <Button className='carritobtn' colorScheme='cyan'  onClick={()=>addToCart()}>Añadir al carrito</Button>
          </WrapItem>
      </div>
      
    </div>
    
    
      

  )
}

export default ItemDetail

