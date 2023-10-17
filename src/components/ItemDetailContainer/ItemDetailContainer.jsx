import React from 'react'
import { useEffect, useState } from "react";
import { getProductByID } from '../../functions/useFunction.js'
import ItemDetail from '../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null)
    const [flag, setFlag] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        getProductByID('2')
            .then(response => {
                setProduct(response)
                setFlag(false)
            })
    }, [itemId])


    return (
        <div>
            {flag ? "Esperando" : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer