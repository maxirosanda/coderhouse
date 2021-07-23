const {op, n1, n2} = process.env;

console.log(`n1: ${n1}, op: ${op}, n2: ${n2}`);

console.log(eval(`Resultado:  ${n1}${op}${n2}`));