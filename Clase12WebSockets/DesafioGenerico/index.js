const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
let mensajes = [];

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile("cliente.html", {root: __dirname});
})

io.on("connection", socket => {
    emitir();

    socket.on("caracteres", caracter => {
        console.log(caracter);
        io.sockets.emit("caracteres", caracter);
    });


    socket.on("frases", frase => {
        mensajes.push({socketid: socket.id, mensaje: frase});
        emitir();        
    })
})

function emitir(){
    io.sockets.emit("frases", mensajes);
}

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
})


http.listen(3001, () => {console.log("Desafio generico is running")})
    .on("error", err => {console.log("Error: ", err)})

app.listen(5000, () => {console.log("HTTP is running")})
    .on("error", err => {console.log("Error: ", err)})