import React,{useEffect,useState} from 'react'
import "../DataList/async-mock"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { ProductosApple } from '../DataList/async-mock';

///EL COMPONENTE ITEM LIST CONTAINER ES COMO UN FILTRO DE PRODUCTOS PARA PASARLE A ITEM LIST 
const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {CategoryId} = useParams()

const getProductos = () =>{
return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(ProductosApple)
            },2000)
        })
    }
    
    const getProductosByCategory = (CategoryId)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(ProductosApple.filter(producto => producto.Category === CategoryId))
            }, 2000);
        })
    }
    


useEffect(() => {
    
    if(!CategoryId){
        getProductos().then(productos=>{
            setProductos(productos)
        })
    }else {
        getProductosByCategory(CategoryId).then(productos =>{
            setProductos(productos)
        })
    }

}, [CategoryId]);

    return (
    <div className='nashe'>
        {<ItemList className='nashe' productos={productos}/>}
    </div>
    )
}

export default ItemListContainer