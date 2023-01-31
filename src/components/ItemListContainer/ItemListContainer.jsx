import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

///EL COMPONENTE ITEM LIST CONTAINER ES COMO UN FILTRO DE PRODUCTOS PARA PASARLE A ITEM LIST 
const ItemListContainer = ({stock}) => {
    const [items,setItems] = useState([]);
    const {CategoryId} = useParams()

const getProductos = () =>{
return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(stock)
            },2000)
        })
    }
const getProductosByCategory = (CategoryId)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(stock.filter(productooo => productooo.Category === CategoryId))
            }, 2000);
        })
    }
useEffect(() => {
    if(!CategoryId){
        getProductos()
        .then(itemm=>{
            setItems(itemm)
            })
    }else {
        getProductosByCategory(CategoryId).then(itemm =>{
            setItems(itemm)
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