const express = require("express");
const router = require("./router/usuarios");

const app = express();
app.use(express.json());

app.use("/api", router.set());

app.get("/test", (req, res) => {
    res.send("Hola soy el servidor de Node.js");
});

app.get('*', router.notFound);
app.post('*', router.notFound);
app.put('*', router.notFound);
app.delete('*', router.notFound);

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});

server.on("error", error => console.log(`Error en el servidor ${error}`));