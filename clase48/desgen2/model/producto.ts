import { Producto } from '../types/types.ts';

let productos: Producto[] = [];

const findProductos = () => {
    return productos;
}

const findProductoById = (id:number) => {
    let buscarProducto:Producto = <Producto>productos.find((elemento: Producto) => elemento.id == id);
    return buscarProducto || {};
}

const createProducto = (nombre: string, descripcion: string, precio: number) => {
    let nuevoProducto:Producto = {
        id: productos.length ? (productos[productos.length - 1].id + 1) : 1,
        nombre,
        descripcion,
        precio
    }
    productos.push(nuevoProducto);
    return nuevoProducto;
}

const updateProducto = (id: number, nombre: string, descripcion: string, precio: number) => {
    
    let actualizarProducto:Producto = {id, nombre, descripcion, precio};
    let index = productos.findIndex( (el:Producto) => el.id == id);
    productos.splice(index, 1, actualizarProducto);
    return actualizarProducto;

}

const deleteProducto = (id:number) => {
    let index = productos.findIndex( (el:Producto) => el.id == id);
    return productos.splice(index, 1)[0];
}

export { findProductos, findProductoById, createProducto ,updateProducto, deleteProducto };