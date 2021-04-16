const {options} = require("./options/MariaDB");
const knex = require("knex")(options);

knex.from("cars").where("price", "9000").update({price:9500})
.then( () => { console.log("Table updated")})
.catch( (e) => { console.log(e); throw e})
.finally( () => {knex.destroy()});