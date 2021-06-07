const express = require("express");
const app = express();
const {fork} = require("child_process");
process.env.PORT = process.argv[2] || 8081;

process.on('message', () => {
    return `Servidor express en ${process.env.PORT} - PID ${process.pid} - ${new Date()}}`;
})

app.get("/", (req, res) => {
    res.status(200).send(`Servidor express en ${process.env.PORT} - PID ${process.pid} - ${new Date()}}`)
});


app.listen(process.env.PORT, () => {console.log("running")});