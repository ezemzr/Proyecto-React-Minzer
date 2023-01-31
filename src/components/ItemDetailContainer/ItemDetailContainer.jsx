import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer({stockazo}) {
  const [items,setItems] = useState([]);
  const { productoId } = useParams();

  const getProductosById = (productoId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(stockazo.find(producto => producto.id.toString() === productoId ))
        }, 1000);
    })
}

useEffect(() => {
  if(!productoId){
    getProductosById().then(productos=>{
      setItems(productos)
      })}
}, [productoId]);
  return (
    <div className='ItemDetail' >
      <ItemDetail itemsss={items}/>
    </div>
  );
}
export default ItemDetailContainer