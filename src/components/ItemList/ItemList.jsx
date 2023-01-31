import React from 'react'
import Item from '../Item/Item'


// EL COMPONENTE ITEM LIST ES PARA GENERAR EL MAP Y PASARSELO A ITEM 
const ItemList = ({itemss}) => {
    return (
    <div className='nasheeee'>
        {itemss.map(prodd =>
        <Item  key={prodd.id}{...prodd}/>
        )}
    </div>
    )
}

export default ItemList