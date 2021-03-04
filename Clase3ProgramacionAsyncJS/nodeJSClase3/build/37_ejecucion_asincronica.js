"use strict";
///////////////////////////
// Ejecución asincrónica // (37)
///////////////////////////
/*
  - En ejecución asincrónica, sólo sabemos en qué orden comenzarán
    su ejecución las instrucciones, pero no sabemos en qué momento
    ni en qué orden terminarán de ejecutarse.

  - Ejemplo: no se bloquea la ejecución normal del programa y se
    permite que este se siga ejecutando
*/
console.log('>> INICIO --> Ejecución asincrónica.');
// Se carga el módulo
var fsAsync = require('fs');
var rutaArchivoAsync = './archivos/usuarioAsync.json';
var usuarioAsync = {
    "id": 7,
    "nombre": "Ruben Estrada",
    "Pais": "Colombia",
    "Ciudad": "Cali"
};
// https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
var escribirArchivoAsync = function (ruta, usu) {
    // Se convierte objeto a string
    var data = JSON.stringify(usu);
    // Se escribe JSON a un archivo
    fsAsync.writeFile(ruta, data, function (err) {
        if (err) {
            throw err;
        }
        console.log("Datos guardados.");
    });
};
// Invocacion async
escribirArchivoAsync(rutaArchivoAsync, usuarioAsync);
console.log("Escritura finalizada.");
// Resultado:
// 1. >> INICIO --> Ejecución asincrónica.
// 2. Vuelta de la escritura
// 3. >> FIN --> Ejecución asincrónica.
// 4. Escritura finalizada.
/*
 - Para que el mensaje de ‘finalizado’ salga después de grabado
   el archivo se necesita anidar las instrucciones dentro de
   los callbacks

 - Lo único que podemos controlar en este tipo de operaciones
   es que el callback siempre se ejecuta luego de finalizar
   todas las demás instrucciones involucradas en ese llamado.

*/
console.log('>> FIN --> Ejecución asincrónica.');
