import React from 'react'
import Item from '../Item/Item'


// EL COMPONENTE ITEM LIST ES PARA GENERAR EL MAP Y PASARSELO A ITEM 
const ItemList = ({items}) => {
    return (
    <div className='nasheeee'>
        {items.map(producto =>
        <Item  key={producto.id}{...producto}/>
        )}
    </div>
    )
}

export default ItemList