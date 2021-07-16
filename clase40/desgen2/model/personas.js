let personas = [];

module.exports = {
    obtenerPersonas: async () => {
        return personas;
    },
    
    agregarPersonas: async (persona) => {
        return personas.push(persona);
    }
}