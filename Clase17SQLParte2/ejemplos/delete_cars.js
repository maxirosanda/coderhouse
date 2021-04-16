const {options} = require("./options/MariaDB");
const knex = require("knex")(options);


knex.from("cars").del()
    .then( () => {console.log("All cars deleted")})
    .catch( e => {console.log(e); throw e})
    .finally( () => {knex.destroy()});