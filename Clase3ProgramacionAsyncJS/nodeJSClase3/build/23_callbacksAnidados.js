"use strict";
////////////////////////
// Callbacks Anidados // (23)
////////////////////////
/*
- Fragmento de código en el que una función llama a un callback,
  y este a otro callback, y este a otro, y así sucesivamente.
 
- Son operaciones encadenadas, en serie.
 
- Si el nivel de anidamiento es grande, se puede producir
  el llamado "callback hell" (infierno de callbacks).
*/
console.log('>> INICIO --> Callbacks Anidados.');
// Libreria nativa.
var fs1 = require('fs');
// Common
var rutaArchivo = './archivos/usuarioAnidado.json';
var usuario2 = {
    "id": 2,
    "nombre": "Heather Rathaway",
    "Pais": "United States",
    "Ciudad": "New York"
};
// Se convierte texto a JSON
var leerArchivoAnid = function (ruta) {
    fs1.readFile(ruta, 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        // Se pasa JSON a objeto
        var user = JSON.parse(data.toString());
        // Se imprime el JSON
        console.log(user);
    });
};
// https://nodejs.org/api/fs.html#fs_fs_write_fd_buffer_offset_length_position_callback
var escribirArchivoAnid = function (ruta, usu, callbackLeer) {
    // Se convierte objeto a string
    var data = JSON.stringify(usu);
    // Se escribe JSON a un archivo
    fs1.writeFile(ruta, data, function (err) {
        if (err) {
            throw err;
        }
        console.log("Datos guardados.");
    });
    callbackLeer(ruta);
};
// Escritura y lectura del archivo
escribirArchivoAnid(rutaArchivo, usuario2, leerArchivoAnid // <--- Solo pasar como callback nombre de fn.
);
// Alternativo misma funcionalidad
escribirArchivoAnid(rutaArchivo, usuario2, function (error) {
    leerArchivoAnid(rutaArchivo);
});
// Correr por linea de comandos "npm run execute_23"
console.log('>> FIN --> Callbacks Anidados.');
