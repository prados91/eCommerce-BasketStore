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

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
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

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === categoryId))
        }, 500);
    })
}