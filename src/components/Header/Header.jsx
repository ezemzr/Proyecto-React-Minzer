import React from 'react'
import header from "./esaaaa.jpg"
import { Image } from '@chakra-ui/react'
import "./Header.css"

const Header = () => {
  return (
    <div className='headerr'>
        <Image className='headerr' src={header} alt='apple' />
    </div>
  )
}

export default Header