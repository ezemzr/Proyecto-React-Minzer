import React,{useContext} from 'react'
import { Card, Image,Stack, CardBody, CardFooter,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'; 
import { CartContext } from '../Context/CartContext';

// YA RECIBIENDO LOS PRODUCTOS DE ITEMLISTCONTAINER Y RECIBO ACADA PROD. YA DESTRUCTURADO CON EL MAP DE ITEMLIST
// Y EN ITEM YO MANEJO LAS PROPIEDADES COMO ME CONVENGAN, CREANDO UNA PLANTILLA DE PRODUCTO
const Item = ({id,Nombre,img,Precio,Lanzamiento,Category}) => {
    const [cart, setCart]  = useContext(CartContext);
    
    const quantity = cart.reduce((acc,curr)=>{
        return acc + curr.quantity
    },0)

    const PrecioTotal = cart.reduce(
      (acc, curr)=> acc + curr.quantity * curr.Precio,0)

    const addToCart = ()=>{
        setCart((currItems)=>{
            const isItemsFound =  currItems.find((item)=> item.id === id)
            if(isItemsFound){
                return currItems.map((item)=>{
                    if(item.id===id){
                        return{...item, quantity: item.quantity + 1}
                    }else{
                        return item
                    }
            })
            }else{
                return[...currItems, {id, quantity: 1, Precio, Nombre}]
            }
        })
    }

    const removeItem = (id)=>{
        setCart((currItems)=>{
                if(currItems.find((item)=> item.id === id?.quantity === 1)){
                    return currItems.filter((item)=>item.id !== id)
                }else{
                    return currItems.map((item)=>{
                        if(item.id=== id){
                            return {...item, quantity: item.quantity -1}
                        }else{
                            return item
                        }
                    } )
                }
        })
    }
    const getQuantitiById = (id) => { 
        return cart.find((item) => item.id === id)?.quantity  || 0
     }
        const quantityPorItem = getQuantitiById(id)


return (
    <Card maxW='sm'>
        <CardBody>
                <Image
                    src={img}
                    boxSize='250px'
                    alt='Si lees esto es porque no le pase bien la prop jeje'
                    borderRadius='lg'
                    objectFit={"contain"}
                    />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{Nombre}</Heading>
                <Text>
                    Category: {Category}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${Precio}
                </Text>
                </Stack>
        </CardBody>
            <Divider />
        <CardFooter>
            <ButtonGroup spacing='1'>
                <Link to={`/detail/${id}`}>
                    <Button variant='solid' colorScheme='blue'>Ver detalles</Button>
                </Link>
            {
                    quantityPorItem === 0 ?(
                    <Button variant='solid' colorScheme='whatsapp' onClick={()=> addToCart()}>Agregar al Carrito</Button>
            ): (
                    <Button variant='solid' colorScheme='teal' onClick={()=> addToCart()}>Agregar más</Button>
            )}
            {
                    quantityPorItem > 0 &&(
                    <Button variant='solid' colorScheme='red' onClick={()=> removeItem(id)}>Restar</Button>
            )
            }
            </ButtonGroup>
        </CardFooter>
    </Card>

)
}

export default Item