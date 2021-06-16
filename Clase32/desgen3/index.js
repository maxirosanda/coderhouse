const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os");

const MODO_CLUSTER = process.argv[2] == 'CLUSTER';

//autocannon -d 20 -c 500 "http://localhost:5000/ramdom-debug"
//autocannon -d 20 -c 500 "http://localhost:5000/ramdom-nodebug"

if(MODO_CLUSTER && cluster.isMaster) {

    const numCpus = os.cpus().length;

    console.log(`Numero de procesadores: ${numCpus}`);
    console.log(`Pid Master: ${process.pid}`);

    for (let i = 0; i < numCpus; i++) {
        cluster.fork();
    }

    cluster.on('exit', worker => {
        console.log('Worker', worker.process.pid, 'died', new Date().toLocaleString())
        cluster.fork();
    });
} else {
    function calcularRandom(min, max, cant) {
        let randoms = [];
        for (let i = 0; i < cant; i++) {
            let random  = parseInt(Math.random() * (max - min +1) + 1);
            randoms.push(random);
        }
        return randoms
    }
    
    app.get("/random-debug", (req, res) => {
        let randoms = calcularRandom(0,9,1000000);
        console.log(randoms);
        res.json({randoms});
    });
    
    app.get("/random-nodebug", (req, res) => {
        let randoms = calcularRandom(0,9,10000);
        res.json({randoms});
    });
    
    app.listen(5000, () => { console.log("runngin on port 5000")})
    .on("error", error => {console.log("error: ", error)});
}