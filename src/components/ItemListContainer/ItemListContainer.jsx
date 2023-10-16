import React from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../functions/useFunction.js'
import { useState, useEffect } from 'react'
const ItemListContainer = ({greeting}) => {

    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((p) => setProducts(p))
    }, [])
    

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer