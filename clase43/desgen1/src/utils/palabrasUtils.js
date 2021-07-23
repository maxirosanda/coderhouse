const palabrasDAO = require('../../models/DAO/palabrasDAO');
const palabrasLib = require('../../lib/palabrasLib');

const obtenerPalabra = async (id) => {
    return await palabrasDAO.obtenerPalabra(id);
}

const guardarPalabra = async (palabra) => {
    asegurarPalabraValida(palabra, true);
    return await palabrasDAO.guardarPalabra(palabra);
}

const asegurarPalabraValida = async (palabra, requerido) => {
    try {
        palabrasLib.validar(palabra, requerido);
    } catch (e) {
        throw new Error('la Palabra posee un formato json invalido o faltan datos: ' + e.details[0].message)
    }
}

module.exports = {
    obtenerPalabra,
    guardarPalabra,
    asegurarPalabraValida
}
