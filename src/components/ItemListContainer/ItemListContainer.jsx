import React from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductByCategory } from '../../functions/useFunction.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([])
    const [load, setLoad] = useState(false);
    const { categoryID } = useParams()

    useEffect(() => {
        setLoad(true);
        const asyncFunc = categoryID ? getProductByCategory : getProducts

        asyncFunc(categoryID)
            .then((p) => setProducts(p))
    }, [categoryID])


    return (
        <>
            {load ?  (<>
                <h1>{greeting}</h1>
                <ItemList productos={productos} />
            </>
            ): ("Esperando")}
        </>
    )
}

export default ItemListContainer