const express = require('express');
const app = express();
const http = require("http").Server(app);
const path = require("path");
const io = require("socket.io")(http);


app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
})

io.on("connection", socket => {
    console.log("Usuario conectado");
    socket.emit("mensaje", "Este es un mensaje desde el servidor");
    
    socket.on("bienvenida", info => {
        console.log(info);
        io.sockets.emit("bienvenida", info);
    })

    // socket.emit o socket.io("seria como la url", dato) 
})

http.listen(3000, () =>  {console.log("running WebSocket")})
    .on("error" , err => {console.log("Error: ", err)})