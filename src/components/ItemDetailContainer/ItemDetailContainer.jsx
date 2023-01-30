import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"
import { ProductosApple } from '../DataList/async-mock';


function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const { productoId } = useParams();

  const getProductosById = (productoId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(ProductosApple.find(producto => producto.id.toString() === productoId ))
        }, 2000);
    })
}


useEffect(() => {
    
  if(!productoId){
    getProductosById().then(productos=>{
          setProductos(productos)
      })}
}, [productoId]);
  return (
    <div className='ItemDetail' >
      <ItemDetail productos={productos}/>
    </div>
  );
}
export default ItemDetailContainer