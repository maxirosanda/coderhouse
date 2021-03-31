const express = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const numeros = [2,3,5,7];
const persona = {
    nombre: "Hernan",
    apellido: "Diaz",
    autos : {
        marca: "Audi",
        modelo: 2020,
        chasis: "4a5dsas"
    }
}

app.get("/suma", (req, res) => {
    res.status(200).send(req.params.numero1 + req.params.numero2);
})

app.get("/obtener", (req, res) => {
    if(req.params.hola) {
        return res.status(400).send("Error");
    }

    res.status(200).send(persona);
})


app.listen(process.env.PORT || 5000, () => {console.log("Running")})
    .on("error", err => {console.log("Error: ", err)})