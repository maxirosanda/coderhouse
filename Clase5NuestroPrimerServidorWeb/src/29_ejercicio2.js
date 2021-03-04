/*
    /////////////////////////
    // 2- ARRAY DE OBJETOS // (29)
    /////////////////////////

    Desarrollar un proyecto en node.js que declare un array 
    de objetos de este tipo:

    let productos = [
        { id:1, nombre:'Escuadra', precio:323.45 },
        { id:2, nombre:'Calculadora', precio:234.56 },
        { id:3, nombre:'Globo Terráqueo', precio:45.67 },
        { id:4, nombre:'Paleta Pintura', precio:456.78 },
        { id:5, nombre:'Reloj', precio:67.89 },
        { id:6, nombre:'Agenda', precio:78.90 }
    ]

    Y obtenga la siguiente información de dicho array

    A) Los nombres de los productos en un string separados por comas.
    B) El precio total
    C) El precio promedio
    D) El producto con menor precio
    E) El producto con mayor precio
    F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo 
       por consola

    Aclaración: todos los valores monetarios serán expresados con 2 decimales

*/
module.exports = {

    calcularArrayObjetos: function(productosArr) {

        // A)
        let listadoNombres = productosArr.map((elemento) => elemento.nombre).toString()
        console.log('>>> Listado de nombres: ' + listadoNombres)

        // B)
        let arrPrecioTotal = productosArr.map((elemento) => elemento.precio)
        let precioTotal = Number(arrPrecioTotal.reduce((a, b) => a + b).toFixed(2)) 
        console.log('>>> Precio total: ' + precioTotal)
        
        // C)
        let precioPromedio = Number((precioTotal/arrPrecioTotal.length).toFixed(2))
        console.log('>>> Precio promedio: ' + precioPromedio)

        // D) - ES6
        let menorPrecio = Math.min.apply(Math, arrPrecioTotal)
        console.log('>>> Producto con menor precio: ' + menorPrecio)

        // E) - ES6
        let mayorPrecio = Math.max.apply(Math, arrPrecioTotal)
        console.log('>>> Producto con mayor precio: ' + mayorPrecio)

        // F)
        let objeto = {
            listadoNombres: listadoNombres,
            precioTotal: precioTotal,
            precioPromedio: precioPromedio,
            menorPrecio: menorPrecio,
            mayorPrecio: mayorPrecio
        }
        console.log('>>> Objeto creado: ', objeto)
    }

}