import { Router } from "../deps.ts";
import {findProducto, findProductoById, createProducto, updateProducto, deleteProducto} from '../controllers/productos.ts';

export const router = new Router()
    .get('/api/productos', findProducto)
    .get('/api/productos/:productoId', findProductoById)
    .delete('/api/productos/:productoId', deleteProducto)
    .put('/api/productos/:productoId', updateProducto)
    .post('/api/productos', createProducto);
    