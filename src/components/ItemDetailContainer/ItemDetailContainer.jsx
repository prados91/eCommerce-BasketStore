import React from 'react'
import { useEffect, useState } from "react";
import { getProductByID } from '../../functions/useFunction.js'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading/Loading'

import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProduct] = useState(null)
    const [flag, setFlag] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setFlag(true)
        getProductByID(id)
            .then(response => {
                setProduct(response)
                setFlag(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [id])


    return (
        <div className='itemDetailContainer__container'>
            {flag ? (<Loading />)  : <ItemDetail producto={producto} />}
        </div>
    )
}

export default ItemDetailContainer