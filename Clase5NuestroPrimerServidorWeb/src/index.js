/*
   Principio de funcionamiento
   ---------------------------
   1- Usa el Patrón Reactor: un modelo de entrada y salida sin 
      bloqueo y controlado por eventos -> liviano, eficiente y 
      soporte de múltiples conexiones

   2- Creación de aplicaciones de red rápidas -> alto nivel de 
      rendimiento => alta escalabilidad

   3- Opera en un solo subproceso ocupando menos memoria

   4- Completamente controlado por eventos

*/
var ejercicio1 = require('./28_ejercicio1.js');
var ejercicio2 = require('./29_ejercicio2.js');


// Invocación Ejercicio 1
// Param 1: mínimo, Param 2: máximo, Param 3: redondeo, Param 5: iteraciones
ejercicio1.crearNumerosAleatorios(1, 20, 3, 10000)


// Invocación Ejercicio 2
let productos = [
   { id:1, nombre:'Escuadra', precio:323.45 },
   { id:2, nombre:'Calculadora', precio:234.56 },
   { id:3, nombre:'Globo Terráqueo', precio:45.67 },
   { id:4, nombre:'Paleta Pintura', precio:456.78 },
   { id:5, nombre:'Reloj', precio:67.89 },
   { id:6, nombre:'Agenda', precio:78.90 }
]

ejercicio2.calcularArrayObjetos(productos)

var ejercicio3 = require('./42_ejercicio3.js');
var http = require("http")

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function (request, response) {
   response.write(ejercicio3.devolverMensajeHorario())
   response.end()
})

server.listen(port, hostname, function() {
   console.log(`Tu servidor está listo en ${hostname}:${port}`)
})

