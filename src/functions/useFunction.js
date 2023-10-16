const dbProd = [
    { id: "1", title: "Producto 1", description: " Descripción del producto 1", category: "Categoría 1", price: 1000, stock: 10, image: "Acá va una imagen" },
    { id: "2", title: "Producto 2", description: " Descripción del producto 2", category: "Categoría 2", price: 1001, stock: 11, image: "Acá va una imagen" },
    { id: "3", title: "Producto 3", description: " Descripción del producto 3", category: "Categoría 3", price: 1002, stock: 12, image: "Acá va una imagen" },
    { id: "4", title: "Producto 4", description: " Descripción del producto 4", category: "Categoría 4", price: 1003, stock: 13, image: "Acá va una imagen" },
    { id: "5", title: "Producto 5", description: " Descripción del producto 5", category: "Categoría 5", price: 1004, stock: 14, image: "Acá va una imagen" },
    { id: "6", title: "Producto 6", description: " Descripción del producto 6", category: "Categoría 6", price: 1005, stock: 15, image: "Acá va una imagen" },
    { id: "7", title: "Producto 7", description: " Descripción del producto 7", category: "Categoría 7", price: 1006, stock: 16, image: "Acá va una imagen" },
    { id: "8", title: "Producto 8", description: " Descripción del producto 8", category: "Categoría 8", price: 1007, stock: 17, image: "Acá va una imagen" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dbProd)
        }, 1000);
    })
}

/*export const getProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
} */


export const getProductByID = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dbProd.find(prod => prod.id === productID))
        }, 1000);
    })
}