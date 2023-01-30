import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { db } from '../../db/firebaseConfig';
import { collection, query, getDocs } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';


///EL COMPONENTE ITEM LIST CONTAINER ES COMO UN FILTRO DE PRODUCTOS PARA PASARLE A ITEM LIST 
const ItemListContainer = ({}) => {
    const [productos, setProductos] = useState([]);
    const {CategoryId} = useParams()
    const [iphone, setIphone] = useState([]);

    const getPhones= async()=>{
        const docs = [];
        const iphones = await db.collection('iPhones').get();
        const ipads = await db.collection('iPads').get();
        const macbooks = await db.collection('MacBooks').get();
        docs.push(...iphones.docs, ...ipads.docs, ...macbooks.docs);
        setIphone(docs)
        console.log(iphone);
        }

    useEffect(()=>{
        getPhones();
    },[])



const getProductos = () =>{
return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(iphone)
            },2000)
        })
    }
    
    const getProductosByCategory = (CategoryId)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(iphone.filter(productooo => productooo.Category === CategoryId))
            }, 2000);
        })
    }

useEffect(() => {
    if(!CategoryId){
        getProductos()
        .then(productos=>{
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
        {<ItemList className='nashe' productoss={productos}/>}
    </div>
    )
}

export default ItemListContainer