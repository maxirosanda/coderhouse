const argumentos = require("yargs").argv;

console.log(argumentos);

console.log(eval( `Resultado: ${argumentos.n1}${argumentos.op}${argumentos.n2}`));