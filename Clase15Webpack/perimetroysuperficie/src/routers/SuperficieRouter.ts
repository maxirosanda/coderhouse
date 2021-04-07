const express = require('express');
const router = express.Router();
import {Superficie} from '../lib/superficie'

let perimetro:Superficie = new Superficie();

router.get('/scuadrado', (req, res) => {
    if(!req.query.lado1) {
        return res.status(400).send("Bad request");    
    }
    let lado1:number = Number(req.query.lado1);
    res.status(200).send(perimetro.getSuperficieCuadrado(lado1));
});

router.get('/srectangulo', (req, res) => {
    if(!req.query.lado1 || !req.query.lado2) {
        return res.status(400).send("Bad request");    
    }
    let lado1:number = Number(req.query.lado1);
    let lado2:number = Number(req.query.lado2);
    res.status(200).send(perimetro.getSuperficieRectangulo(lado1, lado2));
});

router.get('/scirculo', (req, res) => {
    if(!req.query.radio) {
        return res.status(400).send("Bad request, missing radio property");
    }
    let radio:number = Number(req.query.radio);
    res.status(200).send(perimetro.getSuperficieCirculo(radio));
});

module.exports = router;