import React from 'react'
import "./navbar.css";
import { Button  } from '@chakra-ui/react'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { BsApple } from "react-icons/bs";


const NavBar = () => {

    
    return (
    <div className='navbar'>
        <div className="divImg">
        <Link to={"/"}>
            <BsApple className='logoapple'></BsApple></Link> 
        </div>
        <div className='divLinkss' >
            <ul className="divLinks">
                <Link to={'/'} className='itemLink'>
                    <Button colorScheme='whiteAlpha' size='sm'>
                        Inicio
                    </Button>   
                </Link>
                <Link to={'/Productos'} className='itemLink'>
                    <Button colorScheme='whiteAlpha' size='sm'>
                        Productos
                    </Button>
                </Link>
                <Link to={'/Category/Iphone'}>
                    <Button colorScheme='whiteAlpha' size='sm'>
                        iPhone
                    </Button>
                </Link>
                <Link to={'/Category/Ipad'}>
                    <Button colorScheme='whiteAlpha' size='sm'>
                        iPad
                    </Button>
                </Link> 
                <Link to={'/Category/MacBook'}>
                    <Button colorScheme='whiteAlpha' size='sm'>
                        MacBook
                    </Button>
                </Link>
            </ul>
        </div>
        <CartWidget></CartWidget>
    </div>    
)
}

export default NavBar