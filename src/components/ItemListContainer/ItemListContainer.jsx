import React from 'react'
import ItemList from '../ItemList/ItemList'
import ItemList2 from '../ItemList/ItemList2'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {

    const getProducts = async() => {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        return data
    }

    const [productos, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((p) => setProducts(p))
    },[])

    return (
        <>
            <ItemList productos={productos}/>
            {/*<ItemList2 productos={productos}/>*/}
        </>
    )
}

export default ItemListContainer