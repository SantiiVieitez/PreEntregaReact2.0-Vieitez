const products = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        category: 'celular',
        stock: 10,
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
        category: 'celular',
        stock: 20,
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 300,
        category: 'tablet',
        stock: 30,
    },
    {
        id: 4,
        name: 'Producto 4',
        price: 400,
        category: 'tablet',
        stock: 40,
    },
    {
        id: 5,
        name: 'Producto 5',
        price: 500,
        category: 'notebook',
        stock: 50,
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((product) => product.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((product) => product.category === category))
        }, 500)
    })
}