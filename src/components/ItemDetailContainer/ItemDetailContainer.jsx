import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

import { useEffect, useState } from "react";
 
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [productos, setProduct] = useState({});
  
    const getProducts = async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getProducts().then((p) => setProduct(p))
    },[])

  return (
    <div>
        <ItemDetail />
    </div> 
  )
}

export default ItemDetailContainer