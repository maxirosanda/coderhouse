const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const frase = "Frase inicial";

app.get('/api/leer', (req, res) => {
    res.status(200).send(frase);
})

app.get('/api/leer/:pos', (req, res) => {
    let arr = frase.split(" ");

    if(isNaN(req.params.pos)) {
        return res.status(400).json({"message": "El parámetro está fuera de rango"});
    } else {
        let posicion = parseInt(req.params.pos) - 1;
        if( (1 < posicion) || (posicion > 2)){
            return res.status(400).json({"message": "El parámetro está fuera de rango"});
        }
        res.status(200).send(arr[posicion]);
    }
})

app.post('/api/guardar', (req, res) => {
    if( !req.body || !req.body.palabra){
        return res.status(400).send("Error en los parametros");
    }
    res.status(200).send( frase + " " + req.body.palabra);
})

app.put('/api/actualizar/:pos', (req, res) => {

    let arr = frase.split(" ");

    if(isNaN(req.params.pos) || !req.body || !req.body.palabra ) {
        return res.status(400).json({"message": "El parámetro está fuera de rango"});
    } else {
        let posicion = parseInt(req.params.pos) - 1;
        if( (1 < posicion) || (posicion > arr.length)){
            return res.status(400).json({"message": "El parámetro está fuera de rango"});
        }
        arr[posicion] = req.body.palabra;
    }
    res.status(200).send(arr.join(" "));
})

app.delete('/api/actualizar/:pos', (req, res) => {

    let arr = frase.split(" ");

    if(isNaN(req.params.pos)) {
        return res.status(400).json({"message": "El parámetro está fuera de rango"});
    } else {
        let posicion = parseInt(req.params.pos) - 1;
        if( (1 < posicion) || (posicion > arr.length)){
            return res.status(400).json({"message": "El parámetro está fuera de rango"});
        }
        arr[posicion] = "";
    }
    res.status(200).send(arr.join(" ").trim());
})




app.listen( 8080, () => {console.log("server running")})
    .on( "error", e => console.log(e.message));
