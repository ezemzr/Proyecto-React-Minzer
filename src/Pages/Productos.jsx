import React from 'react'
import Item from '../components/Item/Item'

const Productos = ({items}) => {
  return (
    <div className='productos'>
      <div className='messi'>
        {items.map((prodd) =>{
        return( 
            <Item key={prodd.id}{...prodd} />)
       }
        )}
    </div>
    </div>
    
  )
}

export default Productos