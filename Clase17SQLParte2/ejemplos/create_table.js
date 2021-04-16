const {options} = require("./options/MariaDB");
const knex = require("knex")(options);


    knex.schema.createTable("cars", table => {
        table.increments('id')
        table.string("name")
        table.integer("price")
    }).then( () => {
        console.log("Table created")
    }).catch( (e) => {
        console.log(2); 
        throw e;
    }).finally( () => {
        knex.destroy();
    })
