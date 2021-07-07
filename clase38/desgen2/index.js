const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        mensaje: String,
        articulos: [Articulo]
    }
    type Mutation {
        guardarArticulo(titulo: String!, texto: String!, autor: String!,): Articulo
    }
    type Articulo {
        titulo: String
        texto: String
        autor: String
    }
`)

const articulos = [];

const guardarArticulo = ({titulo, texto, autor}) => {
    let articulo = {titulo, texto, autor};
    articulos.push(articulo);
    return articulo;
}

const root = {
    mensaje: () => 'GrapQL: Ingrese Articulo',
    articulos: () => articulos,
    guardarArticulo: guardarArticulo
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.use(express.static('public'));
app.listen(8080, () => {console.log("Servidor funcionando")});