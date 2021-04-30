import mongoose from "mongoose";
import {estudiantes} from "./models/estudiantes.js";
import {clientes} from "./models/clientes.js";

mongoose.connect("mongodb+srv://hernan:hernan@cluster0.sjlll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    console.log(err);
})

console.log("DB conectada");

( async () => {
    
    let find = await clientes.find({});

    console.log(find);

    let insert = await clientes.create({ nombre: 'Federico', apellido: 'Perez', dni: '320118321' });
    console.log(insert);


    
})()

