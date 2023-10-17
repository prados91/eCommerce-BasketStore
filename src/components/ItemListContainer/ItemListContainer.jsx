import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductByCategory } from '../../functions/useFunction.js'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {

    const [productos, setProducts] = useState([]);
    const [load, setLoad] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        
        const asyncFunc = category ? getProductByCategory : getProducts

        asyncFunc()
            .then((p) => {
                setProducts(p)
                setLoad(true)   
            }
            )
    }, [category])

    return (
        <div className="itemListContainer__container">
            {load ?  (<>
                <h1>{greeting}</h1>
                <ItemList productos={productos} />
            </>
            ): ("Esperando")}
        </div>
    )
}

export default ItemListContainer