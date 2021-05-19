const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const router = require("./src/router/cookiesRouter");

app.use(cookieParser());
app.use(router);


app.listen(5000, () => { console.log("running")});