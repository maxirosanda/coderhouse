const express = require('express');
const router = express.Router();
import {Perimetro} from '../lib/perimetro';
let perimetro:Perimetro = new Perimetro();

router.get('/pcuadrado', (req, res) => {

    if(!req.query.lado1) {
        return res.status(400).send("Bad request");    
    }
    let lado1:number = Number(req.query.lado1);
    res.status(200).send(perimetro.getPerimetroCuadrado(lado1));
});

router.get('/prectangulo', (req, res) => {
    if(!req.query.lado1 || !req.query.lado2) {
        return res.status(400).send("Bad request");    
    }
    let lado1:number = Number(req.query.lado1);
    let lado2:number = Number(req.query.lado2);
    res.status(200).send(perimetro.getPerimetroRectangulo(lado1, lado2));
});

router.get('/pcirculo', (req, res) => {
    if(!req.query.radio) {
        return res.status(400).send("Bad request, missing radio property");
    }
    let radio:number = Number(req.query.radio);
    res.status(200).send(perimetro.getPerimetroCirculo(radio));
});

module.exports = router;