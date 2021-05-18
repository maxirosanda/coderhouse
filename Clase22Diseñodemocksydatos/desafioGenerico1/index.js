const express = require("express");
const app = express();

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']


app.get("/test", (req, res) => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push({
            nombre: nombres[Math.round(Math.random() * 4)],
            apellido: apellidos[Math.round(Math.random() * 4)],
            color: colores[Math.round(Math.random() * 4)]
        }); 
    }
    res.status(200).send(arr);
})


app.listen(3000, () => {console.log("running")});