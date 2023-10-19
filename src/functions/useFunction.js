const products = [
    { id: '1', title: 'Producto 1', description: 'Descripción del producto 1', category: '1', price: 1000, stock: 10},
    { id: '2', title: 'Producto 2', description: 'Descripción del producto 2', category: '1', price: 1001, stock: 11}, 
    { id: '3', title: 'Producto 3', description: 'Descripción del producto 3', category: '2', price: 1002, stock: 12}, 
    { id: '4', title: 'Producto 4', description: 'Descripción del producto 4', category: '2', price: 1003, stock: 13},
    { id: '5', title: 'Producto 5', description: 'Descripción del producto 5', category: '3', price: 1004, stock: 14},
    { id: '6', title: 'Producto 6', description: 'Descripción del producto 6', category: '3', price: 1005, stock: 15},
    { id: '7', title: 'Producto 7', description: 'Descripción del producto 7', category: '4', price: 1006, stock: 16},
    { id: '8', title: 'Producto 8', description: 'Descripción del producto 8', category: '4', price: 1007, stock: 17},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === category))
        }, 500);
    })
}
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500);
    })
}
