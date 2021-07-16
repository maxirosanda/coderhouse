const personasService = require('../services/personas');


const getHtmlOnwire = async (req, res) => {
    res.render('plantilla-html-onwire', {personas: await personasService.obtenerPersonas()});
}

const postHtmlOnwire = async (req, res) => {
    let persona = req.body;
    await personasService.agregarPersonas(persona);
    res.redirect('/html-onwire');
}


module.exports = {
    getHtmlOnwire,
    postHtmlOnwire
}