const express = require("express");
const app = express();
const app8081 = express();
const app8082 = express();

process.env.PORT = process.argv[2] || 8080;

app.get("/", (req, res) => {
    res.status(200).send(`Servidor express en: ${process.env.PORT} - PID: ${process.pid}`);
});

app.listen(process.env.PORT, () => {console.log(`running on ${process.env.PORT}`)});
