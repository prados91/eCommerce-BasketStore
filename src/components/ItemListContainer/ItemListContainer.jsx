import React from 'react'
import ItemList from '../ItemList/ItemList'
import ItemList2 from '../ItemList/ItemList2'
import { useState, useEffect } from 'react'

const ItemListContainer = () => {
   {/* const productos = [
    { id: "1", name: "Producto 1", descripcion: "Descripción del producto 1", stock: 10, precio: 1000 },
    { id: "2", name: "Producto 2", descripcion: "Descripción del producto 2", stock: 20, precio: 2000 },
    { id: "3", name: "Producto 3", descripcion: "Descripción del producto 3", stock: 30, precio: 3000 },
    { id: "4", name: "Producto 4", descripcion: "Descripción del producto 4", stock: 40, precio: 4000 },
    { id: "5", name: "Producto 5", descripcion: "Descripción del producto 5", stock: 50, precio: 5000 },
    ]

    const verificaProductos = new Promise ((resolve, reject)=> {
        if (productos.length > 0 ) {
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        } else {
            reject('No se encontraron productos')
        }
    })

    verificaProductos
    .then((resultado)=>{
        console.log(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })*/}

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