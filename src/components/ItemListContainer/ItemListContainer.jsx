import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../functions/useFunction.js'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState(null)
    const [load, setLoad] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
                setLoad(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div className="itemListContainer__container">
            {load ? ('Esperando') :
                (<>
                    <h1>{greeting}</h1>
                    <ItemList productos={productos} />
                </>
                )}
        </div>
    )
}

export default ItemListContainer