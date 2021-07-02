const app = require("express")();
const router = require("./src/routes/index");

app.use(router);


app.listen(5000, () => {console.log("Running")});