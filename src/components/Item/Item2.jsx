import React from 'react'
import { Card, Image, Stack, CardBody, Heading, Text, Button, CardFooter } from '@chakra-ui/react'
import './Item.css'

const Item2 = ({ title, description, price, image }) =>{
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt={title}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
      ${price}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
      Ver mas
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default Item2