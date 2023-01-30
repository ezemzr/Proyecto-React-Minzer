import React,{useEffect,useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { ItemsContext } from '../ItemsContext';


///EL COMPONENTE ITEM LIST CONTAINER ES COMO UN FILTRO DE PRODUCTOS PARA PASARLE A ITEM LIST 
const ItemListContainer = ({}) => {
    const [items,setItems] = useContext(ItemsContext)
    const {CategoryId} = useParams()


const getProductos = () =>{
return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(items)
            },2000)
        })
    }
    
    const getProductosByCategory = (CategoryId)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(items.filter(productooo => productooo.Category === CategoryId))
            }, 2000);
        })
    }

useEffect(() => {
    if(!CategoryId){
        getProductos()
        .then(items=>{
            setItems(items)
            })
    }else {
        getProductosByCategory(CategoryId).then(item =>{
            setItems(item)
        })
    }

}, [CategoryId]);

    return (
    <div className='nashe'>
        {<ItemList className='nashe' itemss={items}/>}
    </div>
    )
}

export default ItemListContainer