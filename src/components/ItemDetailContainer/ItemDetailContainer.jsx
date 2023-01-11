import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { ProductosApple } from '../DataList/async-mock';


function ItemDetailContainer({greeting}) {
    const [productos, setProductos] = useState([]);
    const { productoId } = useParams();

    const getProductos = () =>{
      return new Promise((resolve, reject)=>{
                  setTimeout(()=>{
                      resolve(ProductosApple)
                  },2000)
              })
          }

  const getProductosById = (productoId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(ProductosApple.find(producto => producto.id === parseInt(productoId) ))
        }, 2000);
    })
}


useEffect(() => {
    
  if(!productoId){
      getProductos().then(productos=>{
          setProductos(productos)
      })
  }else {
    getProductosById(productoId).then(productos =>{
          setProductos(productos)
      })
  }
}, [productoId]);
  return (
    <div className='ItemDetail' >
      <ItemDetail productos={productos}/>
    </div>
  );
}
export default ItemDetailContainer