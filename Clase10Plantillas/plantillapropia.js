const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

let json = { 
    titulo: "algún título",
    mensaje: "algún mensaje",
    autor: "algun autor",
    version: 82
}

let otroJson = {
    nombre: "Hernan",
    apellido: "Diaz",
    fechayhora: new Date()
}

app.engine( 'cte', function( filepath, options, callback) {
    
    fs.readFile(filepath, (err, content) => {

        if(err) return callback(new Error(error))
        var render = content.toString().replace('^^titulo$$', options.titulo)
                                        .replace('^^mensaje$$', options.mensaje)
                                        .replace('^^autor$$', options.autor)
                                        .replace('^^version$$', options.version)
                                        .replace('^^nombre$$', options.nombre)
                                        .replace('^^apellido$$', options.apellido)
                                        .replace('^^fechayhora$$', options.fechayhora)

        return callback(null, render)
    })
});

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'cte');


app.get('/cte1', (req, res) => {
    res.render("plantilla1.cte", json)
})

app.get('/cte2', (req, res) => {
    res.render("plantilla2", otroJson)
})


app.listen("3001", () => { console.log("running plantilla propia")})
    .on("error", (err) => { console.log("Error: ", err)})