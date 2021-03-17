const express = require("express");
const path = require("path");
const app = express();

app.use('/test', express.static(path.join(__dirname, '/test')));


app.get('/listar', (req, res) => {
    res.sendFile(path.join( __dirname, '/test/index.html'))
})


app.listen(3000, ()=> { console.log("running")})
    .on("error", (err)=>{console.log("error: ", err)})