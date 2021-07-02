const app = require("express")();


app.get("/", (req, res) => {
    res.status(200).send("Hola yarn");
})

app.listen(5000, () => {console.log("Running")});