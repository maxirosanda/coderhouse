const {options} = require("./options/MariaDB");
const knex = require("knex")(options);


knex.from("cars").select("*")
    .then( rows => {
        for (row of rows) {
            console.log(` ${row["id"]} --- ${row["name"]}:  ${row["price"]}`);
        };
    })
    .catch( e => { console.log(e); throw e;})
    .finally( () => { knex.destroy()})