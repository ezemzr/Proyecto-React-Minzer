import React from 'react'
import "./ItemDetail.css"
import { Button,WrapItem,Divider } from '@chakra-ui/react'
import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';



const ItemDetail = ({itemsss}) => {
  return (
    <div className='container'>
      <div className='primerDiv'>      
        <img className='imagenDetalle' alt='ProductoApple' src={itemsss.img}></img>
      </div>
      <Divider className='divisor' orientation='horizontal' />      
      <div className='segundoDiv'>
        <h1 className='productoo'>{itemsss.Nombre}</h1>
        <h3 className='precioo'>${itemsss.Precio}</h3>
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
            <li className='itemlist'>Launch: {itemsss.Lanzamiento}</li>
            <li className='itemlist'>                    
              <GiSmartphone className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>{itemsss.Pantalla}
            </li>
            <li className='itemlist'>                     
              <CgSmartphoneRam className=" primersvg text-black text-4xl mb-5 mr-2"/> 
              {itemsss.Chip}
            </li>
            <li className='itemlist'>                                  <RiCameraLensLine className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                {itemsss.Camara}
              </li>
            {/* <li  className='itemlist'><TbDimensions className="primersvg text-black text-4xl mb-5 mr-1 sm:mr-2"/>{itemsss.Medidas.Alto} x {itemsss.Medidas.Ancho} x {itemsss.Medidas.Peso}gr</li> */}
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

