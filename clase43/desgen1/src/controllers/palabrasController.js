const palabrasUtils = require('../utils/palabrasUtils');

const obtenerPalabra = async (req, res) => {
    try {
        let id = req.params.id;
        let palabras = await palabrasUtils.obtenerPalabra(id);
        res.send(palabras);
    } catch (error) {
        console.log("Error: ", error);
    }
}


const guardarPalabra = async (req, res) => {
    try {
        let palabraGuardada = await palabrasUtils.guardarPalabra(req.body);
        res.json(palabraGuardada);
    } catch (e) {
        console.log("Error en guardarPalabra: ", e)
    }
}

module.exports = {
    obtenerPalabra,
    guardarPalabra
}