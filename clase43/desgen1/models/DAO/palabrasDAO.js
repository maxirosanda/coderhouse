const palabrasDTO = require('../DTO/palabrasDTO');

let palabras = [];

const getNextId = (palabras) => ( palabras.length > 0 ? palabras.length + 1 : 1);

const obtenerPalabra = async () => {
    try {
        return palabras
    } catch (e) {
        console.log("Error: ", e);
    }
}

const guardarPalabra = async (palabra) => {
    try {
        let _id = getNextId(palabras);
        let timestamp = Date.now();
        let palabraGuardada = palabrasDTO(palabra, _id, timestamp);
        palabras.push(palabraGuardada);

        return palabraGuardada;
    } catch (e) {
        console.log('GUARDAR PALABRA Error: ', e);
    }
}

module.exports = {
    obtenerPalabra,
    guardarPalabra
}