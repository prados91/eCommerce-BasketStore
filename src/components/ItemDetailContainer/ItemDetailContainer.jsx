import React from 'react'
import { useEffect, useState } from "react";
import { getProductByID } from '../../functions/useFunction.js'
import ItemDetail from '../ItemDetail/ItemDetail'
 
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null)
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        getProductByID('2')
        .then(response => {
            setProduct(response)
            setFlag(false)
        })
    }, [])


  return (
    <div>
        {flag ? "Esperando": <ItemDetail producto={producto} />}
    </div> 
  )
}

export default ItemDetailContainer