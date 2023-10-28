import React from 'react'
import { useState, useContext, useEffect } from "react"
import { CartContext } from '../../context/CartContext'
import { Flex, Box, Text, Image, Card, CardBody, Heading, CardFooter, Button, Stack } from '@chakra-ui/react'


import CartItem from '../CartItem/CartItem'

import './CartContainer.css'

const CartContainer = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [isEmpty, setIsEmpty] = useState(true);

    const { cart, clearItemsFromCart } = useContext(CartContext);

    useEffect(() => {
        setTotalPrice(cart.reduce((acum, item) => acum + item.quantity * item.price, 0));
        setIsEmpty(cart.length === 0);
    }, [cart]);

    return (
        <div className='cartContainer__container'>

            <Box>
                <Text>Flex and Spacer: Full width, equal Spacing</Text>
                <Flex>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                            </CardBody>
                        </Stack>
                        <Stack>
                            <Button variant='solid' colorScheme='blue' direction={{ base: 'column', sm: 'row' }}>
                                Buy Latte
                            </Button>
                        </Stack>
                    </Card>
                </Flex>
            </Box>

            <div className="cartContainer__container">
                <h2>Carrito de compras</h2>
                <hr />
                <div className="cartContainer__columns">
                    <p>Producto</p>
                    <p>Subtotal</p>
                </div>
                <hr />
                <div className="cartContainer__products">
                    {isEmpty ? <div>El carrito de compras está vacio!</div> : <CartItem />}
                </div>
                <hr />
                <p className="cartContainer__totalPrice">
                    <b>TOTAL: ${totalPrice}.-</b>
                </p>
                <hr />
                {!isEmpty && (
                    <div className="cartContainer__buttons">
                        <button
                            className="cartContainer__btnclearItemsFromCart"
                            onClick={() => {
                                clearItemsFromCart();
                            }}
                        >
                            Vaciar carrito <i className="bi bi-trash3"></i>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartContainer

