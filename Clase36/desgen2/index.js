const express = require("express");
const app = express();
const {enviarWapp} = require("./services/twilio");
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.post('/subir', async (req, res) => {
    try {
        console.log( await enviarWapp(req.body))
    } catch (e) {
        console.log("Error: ", e);
    }

    res.redirect("/")
})

app.listen(PORT, () => {console.log("server running")})
    .on("error", err => {console.log("Error: ", err)});