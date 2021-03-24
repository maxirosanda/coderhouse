const socket = io();

socket.on("mensaje", info => {
    alert(info);
})

socket.emit("bienvenida", "una bienvenida");

// socket.on("bienvenida", info => {
//     console.log(info);
// })