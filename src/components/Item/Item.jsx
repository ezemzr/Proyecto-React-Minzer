import React from 'react'
import { Card, Image,Stack, CardBody, CardFooter,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'; 

// YA RECIBIENDO LOS PRODUCTOS DE ITEMLISTCONTAINER Y RECIBO ACADA PROD. YA DESTRUCTURADO CON EL MAP DE ITEMLIST
// Y EN ITEM YO MANEJO LAS PROPIEDADES COMO ME CONVENGAN, CREANDO UNA PLANTILLA DE PRODUCTO
const Item = ({id,Nombre,img,Precio,Lanzamiento,Category}) => {
    return (
<div>
    <Card className='chakra-card' maxW='md'>
        <CardBody>
                <Image
                src={img}
                borderRadius='lg'
                maxHeight={"250px"}
                />
            <Stack mt='6' spacing='3'>
                <Heading size='xl'>{Nombre}</Heading>
                <Text>
                    Lanzamiento: {Lanzamiento}
                    Categoria: {Category}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    Precio: ${Precio}
                </Text>
            </Stack>
        </CardBody>
        <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Link to={`/detail/${id}`.toString()}>
                        <Button variant='solid' colorScheme='blue'>Ver detalles</Button>
                    </Link>
                    <Button variant='solid' colorScheme='blue'>Agregar al Carrito</Button>
                </ButtonGroup>
            </CardFooter>
    </Card>
</div>
)
}

export default Item