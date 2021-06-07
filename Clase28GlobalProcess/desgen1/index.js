let numeros = [];
let trash = process.argv.shift();

if(process.argv.length > 1) {
    let ejec = process.argv.shift().split("/");
    numeros = process.argv.map( el => parseInt(el) || el);
    const checkInt = num => (num.every( el => typeof(el) === 'number'));

    if(checkInt(numeros)) {
        let max = Math.max(...numeros);
        let min = Math.min(...numeros);
        let av = numeros.reduce( (acc, nv) => acc + nv, 0) / numeros.length;
        console.log( `{
            datos: {
                numeros: ${numeros},
                promedio: ${av},
                maximo: ${max},
                minimo: ${min},
                ejecutable: ${ejec[ejec.length - 1]},
                pid: ${process.pid}
            }
        }`);
        process.exit();
    } else {
        console.log(`error: {
            descripcion: Error de tipo,
            numero: ${process.argv}
            tipo: ${numeros.map( el => (typeof(el)))}
        }`)
    }
} else {
    console.log(`error : {description: Entrada vacia}`);
    process.exit(-4);
}