import { Context, helpers } from "../deps.ts";
import type { Producto } from "../types/types.ts";
import * as db from "../model/producto.ts";


export const findProducto = async( ctx:Context) => {
    try {
        ctx.response.body = await db.findProductos();
    } catch (e) {
        ctx.response.status = 404;
        ctx.response.body = {msg: e.message};
    }
}

export const findProductoById = async( ctx:Context) => {
    const productoId = Number(helpers.getQuery(ctx, {mergeParams: true}).productoId);

    try {
        ctx.response.body = await db.findProductoById(productoId);;
    } catch (e) {
        ctx.response.status = 404;
        ctx.response.body = {msg: e.message};
    }
}

export const createProducto = async( ctx:Context) => {
    try {
        const {nombre, descripcion, precio } = await ctx.request.body().value;
        let productoCreado:Producto = await db.createProducto(nombre, descripcion, precio);
        ctx.response.body = productoCreado;
    } catch (e) {
        ctx.response.status = 500;
        ctx.response.body = {msg: e.message};
    }
}

export const updateProducto = async (ctx:Context) => {
    try {
        const productoId = Number(helpers.getQuery(ctx, {mergeParams: true}).productoId);
        const {nombre, descripcion, precio} = await ctx.request.body().value;
        let productoActualizado:Producto = await db.updateProducto(productoId, nombre, descripcion, precio); 
        ctx.response.body = productoActualizado;
    } catch (e) {
        ctx.response.status = 500;
        ctx.response.body = {msg: e.message};
    }
}

export const deleteProducto = async (ctx:Context) => {
    const procuctoId = Number(helpers.getQuery(ctx, {mergeParams:true}).procuctoId);

    try {
        let productoBorrado:Producto = await db.deleteProducto(procuctoId);
        ctx.response.body = productoBorrado;  
    } catch (e) {
        ctx.response.status = 500;
        ctx.response.body = {msg: e.message};
    }
}