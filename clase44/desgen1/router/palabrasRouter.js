const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const config = require('../config/config');
const palabrasController = require('../controller/palabras');

var schema = buildSchema(`
    type Query {
        palabras: [Palabra]
    },
    type Mutation {
        guardarPalabra(palabra: String!): Palabra
    },
    type Palabra {
        _id: Int,
        timestamp: Float,
        palabra: String
    }
`)

const root = {
        palabras: () => { console.log("root"); palabrasController.obtenerPalabras()},
        guardarPalabra: (palabra) => palabrasController.guardarPalabra(palabra),
}

const router = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: config.GRAPHIQL == 'true'
})


module.exports = router;

//  ---------- Uso de la herramienta provista graphqlHTTP para este ejemplo

// query {   --> Tipo de consulta que vamos a realizar
//     palabras --> metodo al que llamamos
//     {   
//       _id,
//       palabra,
//       timestamp
//     }  --> datos que pedimos para ver
//   } 
  
//   mutation { --> Tipo de consulta que vamos a realizar
//     guardarPalabra --> metodo al que llamamos
//     ( 
//       palabra:"hola2"
//     ) --> Dato que le enviamos al metodo
//     {
//       _id,
//       palabra,
//       timestamp
//     }  --> datos que pedimos para ver
//   }
  