const argumentos = require("minimist")(process.argv.slice(2));

console.log(argumentos);

console.log(eval(`Resultado: ${argumentos.n1}${argumentos.op}${argumentos.n2}`))