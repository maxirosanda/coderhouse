/////////////////////////////////
// Bloqueante vs No-Bloqueante // (34)
/////////////////////////////////
console.log('>> INICIO --> Bloqueante vs No-Bloqueante.')
/*
  - Cuando alguna de las instrucciones dentro de una función intente 
    acceder a un recurso que se encuentre fuera del programa 
    (ejemplo: enviar un mensaje por la red o leer un archivo del 
    disco) habrá dos maneras distintas de hacerlo: 
    en forma bloqueante, o en forma no-bloqueante.    
*/

/////////////////////////////
// Operaciones bloqueantes // (35)
/////////////////////////////
/*
  - Permiten que el programa se comporte de manera 
    más intuitiva.

  - Sigue las reglas de la ejecución sincrónica.
*/
// Libreria nativa.
const fs3 = require('fs');

// Common
const rutaArchivoSync = './archivos/usuarioSync.json'
const usuarioSync = {
  "id": 3,
  "nombre": "Maria Rodrigues",
  "Pais": "Brasil",
  "Ciudad": "Brasilia"
}

// https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
const escribirArchivoSync = (ruta, usu) => {
  // Se convierte objeto a string
  const data = JSON.stringify(usu);

  // Se escribe JSON a un archivo
  fs3.writeFileSync(ruta, data)
  console.log("Datos guardados.")
}

// Escribir archivo de forma sincronica.
escribirArchivoSync(rutaArchivoSync, usuarioSync)
console.log("Vuelta de la escritura sincronica.")

console.log('>> FIN --> Bloqueante vs No-Bloqueante.')