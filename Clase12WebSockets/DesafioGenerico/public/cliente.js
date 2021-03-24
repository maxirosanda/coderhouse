const socket = io();


function sendCharacter(caracter) {
    socket.emit("caracteres", caracter.value);
}

function sendFrase() {
    socket.emit("frases", document.getElementById("frases").value);
}


socket.on("caracteres", caracter => {
    document.getElementById("mensaje").value = caracter;
})

socket.on("frases", mensajes => {
    let texto = "";
    mensajes.map( el => {
        texto += `SocketId: ${el.socketid} --> Mesnsaje: ${el.mensaje} <br>`; 
    });

    document.getElementById("respuesta").innerHTML = texto;
})