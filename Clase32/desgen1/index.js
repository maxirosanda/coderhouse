const express = require("express");
const app = express();

//  artillery quick --count 10 -n 50 "http://localhost:5000/random-nodebug" > random-NOdebug.txt
//  artillery quick --count 10 -n 50 "http://localhost:5000/random-debug" > random-debug.txt


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

