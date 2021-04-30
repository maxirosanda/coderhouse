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
        
        // Los estudiantes ordenados por orden alfabético según sus nombres.
        let respuesta = await model.estudiantes.find({}).sort({nombre: 1});
        console.log(respuesta);


        console.log("-------------------- El estudiante más joven.")
        // El estudiante más joven.
        respuesta = await model.estudiantes.find({}).sort({edad: 1}).limit(1);
        console.log(respuesta);

        console.log("------------------ Los estudiantes que pertenezcan al curso '2A'.")
        // Los estudiantes que pertenezcan al curso '2A'.
        respuesta = await model.estudiantes.find({curso: "2A"});
        console.log(respuesta);
        


        // El segundo estudiante más joven.
        console.log("------------------ El segundo estudiante más joven");
        respuesta = await model.estudiantes.find({}).sort({edad: 1}).skip(1).limit(1);
        console.log(respuesta);

        // Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
        console.log("------------------ Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).");
        respuesta = await model.estudiantes.find({}).select([ "nombre", "apellido", "curso", "-_id"]).sort({apellido: -1});
        console.log(respuesta);
        // Los estudiantes que sacaron 10.
        console.log("------- Los estudiantes que sacaron 10.");
        respuesta = await model.estudiantes.find({nota: 10});
        console.log(respuesta);

        // El promedio de notas del total de alumnos.
                    // OPCION 1
        console.log("----------- El promedio de notas del total de alumnos.");
        let estudiantes = await model.estudiantes.find({}).select(["nota", "-_id"]);
        let resultado = estudiantes.reduce( ( (sum, value) => sum + value.nota), 0);

        console.log(resultado  / estudiantes.length);

        // OPCION 2
        resultado = await model.estudiantes.aggregate([ {
            $group : {
                _id: null,
                suma: {$sum : "$nota"}
            }
        }]);
        estudiantes = await model.estudiantes.find({});
        console.log(resultado[0].suma / estudiantes.length);
        
            // OPCION 3
        resultado = await model.estudiantes.aggregate( [ {
            $group: {
                _id : null,
                promedio: { $avg : "$nota"}
            }
        }]);
        console.log(resultado[0].promedio);


        // El promedio de notas del curso '1A'.
        console.log("----------- El promedio de notas del curso '1A'");
        resultado = await model.estudiantes.aggregate( [
            {
                $match: {curso: "1A"}
            },
            {
                $group : {
                    _id: null,
                    promedio: {$avg: "$nota"}
                }
            } ]);
        console.log(resultado[0].promedio);


        // extra
        resultado = await model.estudiantes.aggregate([
            {
                $match: {nombre: "Pedro"}
            },
            {
                $match: {curso: "1A"}
            }
        ])
        console.log(resultado);

    } catch (e) {
        console.log("Error: ", e)
    }
})()