const palabraDTO = require('../DTOs/palabrasDTO');

let palabras = [];

getNextId = (palabras) => ( palabras.length > 0 ? palabras.length + 1 : 1);

obtenerPalabras = async () => {
    try {
        return palabras
    }
    catch(error) {
        console.log('error en obtenerPalabras', error)
        return [];
    }
}

guardarPalabra = async palabra => {
    try {
        let _id = getNextId(palabras)
        let timestamp = Date.now()
        let palabraGuardada = palabraDTO(palabra,_id,timestamp)
        palabras.push(palabraGuardada)

        return palabraGuardada
    }
    catch(error) {
        console.log('error en guardarPalabra:',error)
        let palabra = {}

        return palabra
    }
}


module.exports = {
    obtenerPalabras,
    guardarPalabra
}