import mongoose from 'mongoose';

const clientesCollection = "clientes";

const clientesSchema = new mongoose.Schema( {
    nombre: {type: String},
    apellido: {type: String},
    dni: {type: String}
});

export const clientes = new mongoose.model(clientesCollection, clientesSchema);