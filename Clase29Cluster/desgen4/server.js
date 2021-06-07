const app = require("express")();
process.env.PORT = process.argv[2] || 5001;


app.get("/", (req, res) => {
    res.status("200").send(`servir escuchando en puerto ${process.env.PORT} - PID: ${process.pid}`);
});

app.listen( process.env.PORT, () => {console.log(`running on port: ${process.env.PORT}`)});