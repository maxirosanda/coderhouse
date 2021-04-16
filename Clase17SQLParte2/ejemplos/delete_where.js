const {options} = require("./options/MariaDB");
const knex = require("knex")(options)

knex.from("cars").where("price", ">", "50000").del()
    .then( () => {console.log("deleted")})
    .catch( e => {console.log(e); throw e;})
    .finally( () => {knex.destroy()})