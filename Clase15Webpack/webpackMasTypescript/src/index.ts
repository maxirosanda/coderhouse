import express from 'express';
const app = express();
import {Persona} from './lib/clases';
const operaciones = require('./lib/functions');

const person:Persona = new Persona('coder', 'House');

app.get('/', (req, res) => {
    res.status(200).send({timeES6: operaciones.getTime(), fullNameTS: person.getFullName()});

})

const PORT = 8080;
app.listen(PORT, () => { console.log(`Running on: ${PORT}`)});
