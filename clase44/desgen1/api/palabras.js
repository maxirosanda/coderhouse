const Palabras = require('../model/models/palabras');
const PalabrasDAO = require('../model/DAOs/palabrasDAO');

obtenerPalabras = async (id) => {  
    return await PalabrasDAO.obtenerPalabras(id);
}

guardarPalabra = async (palabra) => { 
    asegurarPalabraValida(palabra,true)
    return await PalabrasDAO.guardarPalabra(palabra) 
}

asegurarPalabraValida = async (palabra,requerido) => {
    try {
        Palabras.validar(palabra,requerido)
    } catch (error) {
        throw new Error('la Palabra posee un formato json invalido o faltan datos: ' + error.details[0].message)
    }
}    


module.exports ={
    obtenerPalabras,
    guardarPalabra,
    asegurarPalabraValida
} 
