const apiPalabras = require('../api/palabras.js');

obtenerPalabras = async () => {
    try {
        console.log("llega");
        let palabras = await apiPalabras.obtenerPalabras();
        console.log("palabras: ", palabras);
        return (palabras)
    } catch(error) {
        console.log('error obtenerPalabras', error)
    }
}

guardarPalabra = async (palabra) => {
    try {
        let palabraGuardada = await apiPalabras.guardarPalabra(palabra);
        return(palabraGuardada);
    }
    catch(error) {
        console.log('error obtenerPalabras', error)
    }
}

module.exports = {
    obtenerPalabras,
    guardarPalabra
}
