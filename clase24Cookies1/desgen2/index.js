const express = require("express");
const app = express();
const session = require("express-session");
const sessionRouter = require("./src/routers/sessionRouter");

app.use(session({
    secret: "estoesunasecret",
    resave: true,
    saveUninitialized: true
}));

app.use(sessionRouter);

app.listen(3000, () => {console.log("running")});