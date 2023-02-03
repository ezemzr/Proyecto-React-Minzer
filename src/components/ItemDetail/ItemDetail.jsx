import React,{useState,useEffect} from 'react'
import "./ItemDetail.css"
import { Button,WrapItem,Divider } from '@chakra-ui/react'
import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';
import { useParams } from 'react-router-dom';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../../db/firebaseConfig';


const ItemDetail = () => {
  const [item,setItem] = useState({});
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
          <Button colorScheme='teal' variant='outline'>
          128GB
        </Button>
        <Button colorScheme='teal' variant='outline'>
        256GB
        </Button>
        <Button colorScheme='teal' variant='outline'>
        512GB
        </Button>
        <Button colorScheme='teal' variant='outline'>
        1024GB
        </Button>
        </div>
      </div>
      <div className='tercerDiv'>
        <div className='titulodiv'>
          <h1 className='Titulo'>Features</h1>
        </div>
        <div>
          <ul className='lista'>
            <li className='itemlist'>Launch: {item.Lanzamiento}</li>
            <li className='itemlist'>                    
              <GiSmartphone className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>{item.Pantalla}
            </li>
            <li className='itemlist'>                     
              <CgSmartphoneRam className=" primersvg text-black text-4xl mb-5 mr-2"/> 
              {item.Chip}
            </li>
            <li className='itemlist'>                                  <RiCameraLensLine className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                {item.Camara}
              </li>
            {/* <li  className='itemlist'><TbDimensions className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>{item.Medidas.Alto} x {item.Medidas.Ancho} x {item.Medidas.Peso}gr</li> */}
          </ul>
        </div>
          <WrapItem className='botoncontainer'>
            <Button className='carritobtn' colorScheme='whatsapp'>Añadir al carrito</Button>
          </WrapItem>
      </div>
      
    </div>
    
    
      

  )
}

export default ItemDetail

