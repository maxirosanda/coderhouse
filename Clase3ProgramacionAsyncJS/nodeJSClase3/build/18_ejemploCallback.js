"use strict";
///////////////
// Callbacks // (18)
///////////////
/*
  - Un callback es una función que se envía como argumento
    en otra función.
 
  - La intención es que la función que hace de receptora ejecute
    la función que se le está pasando por parámetro.
 
  - La función “ejecutar” que usamos en el punto anterior “recibe un
    callback”.
 
  - Imaginemos que queremos que al finalizar una operación se ejecute
    un cierto código:
    
    Queremos escribir un archivo y registrar en un log la hora en se
    termine de escribir.
    
    Es probable que no se pueda saber con exactitud en qué momento
    va a finalizar.
    
    En algunos casos no podemos ejecutar la de escritura y luego,
    a continuación, guardar el log.
    
    En estos escenarios, las funciones deben recibir como último
    parámetro un callback, que será ejecutado al finalizar la ejecución
    de la función.
*/
console.log('>> INICIO --> Callbacks.');
// Se carga el módulo
var fs = require('fs');
// Helper para formatear fecha
var formatearFecha = function (fecha) {
    return fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
};
// Función para escribir archivo a la que se le pasa fn callback.    
var escribirArchivo = function (ruta, usu, callbackLog) {
    // Se convierte objeto a string
    var data = JSON.stringify(usu);
    // Se escribe JSON a un archivo
    fs.writeFile(ruta, data, function (err) {
        if (err) {
            throw err;
        }
        console.log("Datos guardados.");
    });
    var fechaString = formatearFecha(new Date());
    callbackLog(fechaString, "Datos guardados correctamente.");
};
// Objeto a escribir en archivo    
var usuario = {
    "id": 1,
    "nombre": "Juan Perez",
    "Pais": "Argentina",
    "Ciudad": "Buenos Aires"
};
// Función callback
var loguear = function (fecha, mensaje) { return console.log(fecha + " : " + mensaje); };
// Invocación a la función
escribirArchivo('./archivos/usuario.json', usuario, loguear);
// Correr por linea de comandos "npm run execute_18"
console.log('>> FIN --> Callbacks.');
