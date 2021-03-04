/*
    ///////////////////////////
    // 1- NÚMEROS ALEATORIOS // (28)
    ///////////////////////////

    A- Crear un proyecto en node.js que genere 10000 números aleatorios 
       en el rango  de 1 a 20.
    
    B- Crear un objeto cuyas claves sean los números salidos y el valor 
       asociado a cada clave será la cantidad de veces que salió dicho número. 
       Representar por consola los resultados.

    { "clave" : "valor" }
    
    { "1" : "1.25" }
    { "1" : "2.50" }
    { "2" : "1.25" }
    
*/

module.exports = {
    crearNumerosAleatorios: function (min, max, redondeo, cantidadIter) {
        let i = 0
        let arrClaves = []
        do {
            // Redondeo a 4 dígitos.
            let clave = (Math.random() * (max - min) + min).toFixed(redondeo);
            arrClaves.push(clave)
            let valor = arrClaves.filter(c => c === clave).length;
            console.log(
                { clave: clave, valor: valor }
            )
            i++
        }
        while (i < cantidadIter)
    }
}


/*
// Notación alternativa
function crearNumerosAleatorios(min, max, redondeo, cantidadIter) {
    let i = 0
    let arrClaves = []
    do {
        // Redondeo a 4 dígitos.
        let clave = (Math.random() * (max - min) + min).toFixed(redondeo);
        arrClaves.push(clave)
        let valor = arrClaves.filter(c => c === clave).length;
        console.log(
            { clave: clave, valor: valor }
        )
        i++
    }
    while (i < cantidadIter)
}
module.exports.crearNumerosAleatorios = crearNumerosAleatorios;
*/