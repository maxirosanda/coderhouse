import mongoose from 'mongoose';

const estudiantesCollection = "estudiantes";

const estudiantesSchema = new mongoose.Schema( {
    nombre: {type: String},
    apellido: {type: String},
    dni: {type: String},
});


export const estudiantes = new mongoose.model(estudiantesCollection, estudiantesSchema);