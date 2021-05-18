const express = require("express");
const app = express();
const fakerUsuarios = require("./facker/usuarios");

app.get("/test", (req, res) => {

    let cant = req.query.cant || 10;
    let resp = [];
    for (let i = 0; i < cant; i++) {
        let usuarios = fakerUsuarios.get();
        usuarios.id = i + 1;
        resp.push(usuarios);
    }   
    res.status(200).send(resp);
})

app.listen(3000, ()=> {console.log("running")});