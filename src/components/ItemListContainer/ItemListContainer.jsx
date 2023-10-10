import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({ greetings }) => {
    const productos = [
    { id: "1", name: "Producto 1", descripcion: "Descripción del producto 1", stock: 10, precio: 1000 },
    { id: "2", name: "Producto 2", descripcion: "Descripción del producto 2", stock: 20, precio: 2000 },
    { id: "3", name: "Producto 3", descripcion: "Descripción del producto 3", stock: 30, precio: 3000 },
    { id: "4", name: "Producto 4", descripcion: "Descripción del producto 4", stock: 40, precio: 4000 },
    { id: "5", name: "Producto 5", descripcion: "Descripción del producto 5", stock: 50, precio: 5000 }
    ]
    return (
        <div>
            <h1>{greetings}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer