import React from 'react'
import header from "./My project-1 (1).png"
import { Image } from '@chakra-ui/react'
import "./Header.css"
import { Button ,Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='headerr'>
        <div className='divimg'>
          <Image className='imgHeader' src={header} alt='apple' />
        </div>
        <div className='divtit' >
          <h1 class="title">Iphone 14</h1>
          <Link to={`/Category/Iphone`}>
            <Stack direction='row' spacing={4} align='center'>
              <Button className='detalleess' colorScheme='teal'
              variant='outline'>Detalles
              </Button>
            </Stack>
          </Link>
        </div>
      </div>
    </div>
    
  )
}

export default Header