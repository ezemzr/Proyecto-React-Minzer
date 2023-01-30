import React,{useState,createContext,useEffect} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../db/firebaseConfig"

export const ItemsContext = createContext();

export const ItemsProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const itemsProducts = collection(db,"productos")


    const getItems= async ()=>{
        const querySnapshot = await getDocs(itemsProducts);
        const docs = querySnapshot.docs.map((doc)=>doc.data());
        setItems(docs)
        console.log(items);
        }

    useEffect(() => {
    getItems()
    }, []);



    return (
    <ItemsContext.Provider value={[items,setItems,getItems]}> 
    {children}
    </ItemsContext.Provider>
)
}

