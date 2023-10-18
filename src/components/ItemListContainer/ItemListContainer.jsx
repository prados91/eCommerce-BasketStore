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

    const products = [
        { id: '1', title: 'Producto 1', description: 'Descripción del producto 1', category: 'gorras', price: 1000, stock: 10, image: 'a.png' },
        { id: '2', title: 'Producto 2', description: 'Descripción del producto 2', category: 'gorras', price: 1001, stock: 11, image: 'a.png' },
        { id: '3', title: 'Producto 3', description: 'Descripción del producto 3', category: 'camisetas', price: 1002, stock: 12, image: 'a.png' },
        { id: '4', title: 'Producto 4', description: 'Descripción del producto 4', category: 'camisetas', price: 1003, stock: 13, image: 'a.png' },
        { id: '5', title: 'Producto 5', description: 'Descripción del producto 5', category: 'pantalones', price: 1004, stock: 14, image: 'a.png' },
        { id: '6', title: 'Producto 6', description: 'Descripción del producto 6', category: 'pantalones', price: 1005, stock: 15, image: 'a.png' },
        { id: '7', title: 'Producto 7', description: 'Descripción del producto 7', category: 'camperas', price: 1006, stock: 16, image: 'a.png' },
        { id: '8', title: 'Producto 8', description: 'Descripción del producto 8', category: 'camperas', price: 1007, stock: 17, image: 'a.png' },
    ]
    
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc()
            .then(response => {
                setProducts(response)
                setLoad(false)
            })
            .catch(error => {
                console.error(error)
                setLoad(true)
            })
    }, [])


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