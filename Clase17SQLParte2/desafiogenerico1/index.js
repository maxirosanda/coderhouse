const {options} = require("./options/MariaDB");
const knex = require("knex")(options)

const articulos = [
    {nombre: "remera", codigo:"RR11", precio: 923.25, stock: 3},
    {nombre: "camisa", codigo:"CC22", precio: 999.999, stock: 5},
    {nombre: "pantalon", codigo:"PP3321", precio: 5002.12, stock: 6},
    {nombre: "zapatillas", codigo:"ZZ4531", precio: 6021.25, stock: 1},
    {nombre: "botines", codigo:"BB21121", precio: 8025.01, stock: 8}
];

knex.schema.createTable("articulos", table => {
    table.increments("id")
    table.string("nombre", 15)
    table.string("codigo", 10)
    table.float("precio", 10, 2)
    table.integer("stock")
})
.then(() => {  
    console.log("Tabla creada");
})
.catch( async (e) => {
    if(e.errno === 1050){
        await knex.from("articulos").del();
        console.log("La tabla ya existe, se borra");
    } else {
        console.log(e);
        throw e;
    }
})
.finally( async () => {
    await knex("articulos").insert(articulos);
    console.log("articulos insertados");
    let rows = await knex("articulos").select("*");
    for (row of rows) console.log(`${row["id"]} - ${row["nombre"]} - ${row["precio"]} - ${row["stock"]} - ${row["codigo"]}`);

    console.log("Borrar el articulo con ID 3");
    await knex("articulos").where("id", "=", "3").del()

    console.log("Actualizar el articulo con ID 2 a stock 0");
    await knex("articulos").where("id", "=", "2").update({stock: 0});

    rows = await knex("articulos").select("*");
    for (row of rows) console.log(`${row["id"]} - ${row["nombre"]} - ${row["precio"]} - ${row["stock"]} - ${row["codigo"]}`);
    knex.destroy()
})
