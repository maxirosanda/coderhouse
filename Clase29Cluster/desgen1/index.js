const express = require("express");
const app = express();
const {fork} = require("child_process");

process.env.PORT = process.argv[2] || 8080;

app.get("/", (req, res) => {

    const calculo = fork("./index.js");
    calculo.send('start');
    calculo.on('message', sum => {
        res.status(200).send(`Servidor express en ${process.env.PORT} - PID ${process.pid} - ${new Date()}} + server en fork: ${message}`)  
    
    });
    
});


app.listen(process.env.PORT, () => {console.log("running")});