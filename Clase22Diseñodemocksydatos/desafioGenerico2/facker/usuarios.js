const faker = require("faker");

faker.locale = "es";

//nombre, apellido y color


const get = () => ({
    nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    color: faker.commerce.color()
});

module.exports = {get}