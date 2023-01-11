import React from 'react'
import Item from '../Item/Item'


// EL COMPONENTE ITEM LIST ES PARA GENERAR EL MAP Y PASARSELO A ITEM 
const ItemList = ({productos}) => {
    return (
    <div className='nasheeee'>
        {productos.map(producto =>
        <Item  key={producto.id}{...producto}/>
        )}
    </div>
    )
}

export default ItemList