const config = require('./config');

console.log(`n1: ${config.n1}, op: ${config.op}, n2: ${config.n2}`);

console.log(eval(`Resultado:  ${config.n1}${config.op}${config.n2}`));