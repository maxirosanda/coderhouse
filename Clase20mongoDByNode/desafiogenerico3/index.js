import mongoose from 'mongoose';
import * as model from './models/estudiantes.js';


( async () => {
    try {
        const URL = 'mongodb://localhost:27017/colegio';
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("DB CONNECTED!!!");
        
        let resultado = "";
        // resultado = await model.estudiantes.updateOne({ nombre: "Lucas", apellido: "Blanco"}, { $set: {dni: "20355875"}});
        // console.log(resultado);

        // resultado = await model.estudiantes.updateMany({}, {$set: {ingreso:false}});
        // console.log(resultado);
        
        // resultado = await model.estudiantes.updateMany({curso: "1A"}, {$set: {ingreso: true}})
        // console.log(resultado);

        console.log("Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v")
        resultado = await model.estudiantes.find({nota: {$gte: 4}}).select(["-_id", "-__v"]);
        console.log(resultado);
        
        
        console.log("Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v");
        resultado = await model.estudiantes.find({ingreso: true}).select(["-_id", "-__v"]);
        console.log(resultado);

        // resultado = await model.estudiantes.deleteMany({ingreso: true});
        // console.log(resultado);



        console.log("Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) junto a su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS. ");
        resultado = await model.estudiantes.find({}).select(["-__v"]);
        resultado.map( estudiante => {
            console.log(`${estudiante}  --->  ${estudiante._id.getTimestamp()} `);
        })


    } catch (e) {
        console.log("Error", e);
    }
}) ()