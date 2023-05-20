const productos = [
    { nombre: "Yerba", precio: 500, id: 1, img: "/img/yerba.jpg", idCat:"2"},
    { nombre: "Fideos", precio: 180, id: 2, img: "/img/fideo.png" , idCat:"2"},
    { nombre: "Arroz", precio: 500, id: 3, img: "/img/arroz.png" , idCat:"3"},
    { nombre: "Aceite", precio: 900, id: 4, img: "/img/aceite.jpg" , idCat:"3n"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}


export const getUnProducto = (idItem) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === idItem);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}