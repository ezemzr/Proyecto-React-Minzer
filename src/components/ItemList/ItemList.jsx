import React from 'react'
import Item from '../Item/Item'


// EL COMPONENTE ITEM LIST ES PARA GENERAR EL MAP Y PASARSELO A ITEM 
const ItemList = ({items, getItem}) => {
    return (
    <div className='nasheeee'>
        {items.map((prodd) =>{
        return( 
            <Item key={prodd.id}{...prodd} getItem={getItem} />)
       }
        )}
    </div>
    )
}

export default ItemList