const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const frase = "hola mundo como estan";

app.get('/', (req, res) => {
    res.status(200).send("Hola!")
})

app.get('/api/getFrase', (req, res) => {
    res.status(200).send(frase);
});

app.get('/api/getLetra/:num', (req, res) => {
    console.log(req.params.num);
    if( isNaN(req.params.num) || (1 < parseInt(req.params.num)) || (parseInt(req.params.num) > 5)){
        return res.status(400).json({"message": "El parámetro está fuera de rango"});
    }
    
    res.status(200).send(frase.substr(parseInt(req.params.num) - 1, 1));
});

app.get('/api/getPalabra/:num', (req, res) => {
    let arr = frase.split(" ");

    if(isNaN(req.params.num)) {
        return res.status(400).json({"message": "El parámetro está fuera de rango"});
    } else {
        let opcion = parseInt(req.params.num) - 1;
        if( (1 < opcion) || (opcion > 5)){
            return res.status(400).json({"message": "El parámetro está fuera de rango"});
        }
        res.status(200).send(arr[opcion]);
    }
})

app.listen( 8080, () => {console.log("server running")})
    .on( "error", e => console.log(e.message));
