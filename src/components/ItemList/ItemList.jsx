import React from 'react'
import Item from '../Item/Item'


// EL COMPONENTE ITEM LIST ES PARA GENERAR EL MAP Y PASARSELO A ITEM 
const ItemList = ({productoss}) => {
    return (
    <div className='nasheeee'>
        {productoss.map(producto =>
        <Item  key={producto.id}{...producto}/>
        )}
    </div>
    )
}

export default ItemList