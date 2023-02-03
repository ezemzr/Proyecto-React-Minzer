import React from 'react'
import { Avatar, WrapItem } from '@chakra-ui/react'
import { BsFillCartFill  } from "react-icons/bs";

const CartWidget = ({quantity}) => {


    return (
    <div className='Carrito'>
                <div>
                    <WrapItem>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/kent-c-dodds' />
                    </WrapItem>
                </div> 
                <h6 className='contadorrr'>{quantity}</h6>
                <BsFillCartFill id='messi' height={"30px"}></BsFillCartFill>
        </div>
)

}
export default CartWidget

//how to create a server?