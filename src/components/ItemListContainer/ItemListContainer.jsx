import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../functions/useFunction.js'
import ItemList from '../ItemList/ItemList'
import Loading from '../Loading/Loading'

import { useParams } from 'react-router-dom'

import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([])
    const [load, setLoad] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setLoad(true)
        const renderProd = category ? getProductsByCategory : getProducts;

        renderProd(category)
            .then(response => {
                setProducts(response)
                setLoad(false)
            })
            .catch(error => {
                console.log(error)
            })
    }, [category])


    return (
        <div className="itemListContainer__container">
            {load ? (<Loading />) :
                (<>
                    <h1>{greeting}</h1>
                    <ItemList productos={productos} />
                </>
                )}
        </div>
    )
}

export default ItemListContainer