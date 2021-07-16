const personasService = require('../services/personas');
const path = require('path');

/* -------------------------------------- */
/*             HTML ON WIRE               */
/* -------------------------------------- */

const getHtmlOnwire = async (req, res) => {
    res.render('plantilla-html-onwire', {personas: await personasService.obtenerPersonas()});
}

const postHtmlOnwire = async (req, res) => {
    let persona = req.body;
    await personasService.agregarPersonas(persona);
    res.redirect('/html-onwire');
}

/* -------------------------------------- */
/*             DATA ON WIRE               */
/* -------------------------------------- */
const getDataOnWire = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/plantilla-data-onwire.html'))
}

const postDataOnWire = async (req, res) => {
    let persona = req.body;
    await personasService.agregarPersonas(persona);
    res.status(200).json({persona});
}

const dataJSON = async (req, res) => {
    res.json({personas: await personasService.obtenerPersonas()})
}

module.exports = {
    getHtmlOnwire,
    postHtmlOnwire,
    getDataOnWire,
    postDataOnWire,
    dataJSON
}