const app = require("express")();
const morgan = require("morgan");
process.env.PORT = process.argv[2] || 5002;

app.use(morgan('combined'));
app.get("/", (req, res) => {
    res.status("200").send(`servir escuchando en puerto ${process.env.PORT} - PID: ${process.pid}`);
});

app.listen( process.env.PORT, () => {console.log(`running on port: ${process.env.PORT}`)});