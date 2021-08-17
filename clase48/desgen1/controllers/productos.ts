import { Producto } from '../types/types.ts';


let productos: Producto[] = [];

const obtenerProductos = async(request: any, response: any) => {
    await response.json(productos);
}

const agregarProducto = async( request: any, response: any) => {
    if(!request.data) {
        response.status = 400;
        response.json({
            error: true,
            message: 'No data'
        });
    } else {
        const nuevoProducto: Producto = await request.data;
        nuevoProducto.id = productos.length ? (productos[productos.length - 1].id + 1) : 1;
        productos.push(nuevoProducto);
        response.json(nuevoProducto);
    }
}

export { obtenerProductos, agregarProducto };