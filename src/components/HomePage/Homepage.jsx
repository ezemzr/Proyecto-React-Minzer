import React from 'react'
import { Card, Image,Heading,CardBody } from '@chakra-ui/react'

const Homepage = (props) => {
  return (
    <div className='InsideHome'>
        <Card maxW='sm'>
            <CardBody>
            <Heading size='xl'>{props.Title}</Heading>
                <Image
                src={props.img}
                alt='iphone'
                borderRadius='lg'/>
            </CardBody>  
        </Card>
    </div>
  )
}

export default Homepage
