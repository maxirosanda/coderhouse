const model = require('../model/personas');

const obtenerPersonas = async () => {
    return await model.obtenerPersonas();
}

const agregarPersonas = async (persona) => {
    await model.agregarPersonas(persona);
}

module.exports = {
    obtenerPersonas,
    agregarPersonas
}