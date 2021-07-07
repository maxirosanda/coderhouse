const express = require("express");
const router = express.Router();
const debug = require('debug')('desafiogenerico:productos');

const productos = [];

router.get('/', (req, res) => {
    debug('Cantidad de productos: ' + JSON.stringify(productos));
    res.json({productos});
});

router.get('/:index', (req, res) => {
    let index = parseInt(req.body.index);
    res.json({producto: productos[index]});
});

router.post('/', (req, res) => {
    let {nombre, precio} = req.body;
    let producto = {nombre, precio: Number(precio)}

    productos.push(producto);
    res.redirect('/');
});

router.put('/:index', (req, res) => {
    let index = parseInt(req.body.index);
    let {nombre, precio} = req.body;
    let producto = {nombre, precio: Number(precio)};

    productos.splice(index, 1, producto);
    res.json({productos});
});

router.delete('/:index', (req, res) => {
    let index = parseInt(req.body.index);
    let producto = productos.splice(index, 1);
    res.json({producto});
})

module.exports = router;