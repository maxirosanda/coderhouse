const express = require("express");
const app = express();
const cluster = require("cluster");
const numCpu = require("os").cpus().length;


if(cluster.isMaster) {
    console.log(numCpu);
    console.log(`process ID: ${process.pid} `);


    for (let i = 0; i < numCpu; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log(`Worker, ${worker.process.pid} died ${new Date()}`);
        cluster.fork();
    });
} else {
    process.env.PORT = parseInt(process.argv[2]) || 8080;

    app.get("/", (req, res) => {
        res.status(200).send(`Servidor express en: ${process.env.PORT} - PID (${process.pid})`);
    });

    app.listen(process.env.PORT, () => {
        console.log(`Servidor node escuchando en el pureto: ${process.env.PORT} - PID: ${process.pid}`);

    })
}