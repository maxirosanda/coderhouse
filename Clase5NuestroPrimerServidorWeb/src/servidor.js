/*
  Comandos útiles npm:

  - Ubicación de node.js:    
    $ which npm
    
  - Listado módulos instalados en proyecto:
    $ npm list --depth=0  

  - Listado módulos instalados en proyecto globalmente:
    $ npm list -g --depth=0

  - Desinstalar módulo específico:
    $ npm uninstall <package-name>
    $ npm uninstall nodemon

  - Instalar módulo específico:
    https://www.npmjs.com/package/nodemon?activeTab=versions
    $ npm install <package-name>@<version>
    $ npm install nodemon@2.0.1
      
*/
/*
Módulo HTTP
...........
- Módulo nativo de Node.js

- Trabaja con el protocolo HTTP, que se usa 
  en Internet para transferir datos en la Web.

- Sirve para crear un servidor HTTP que acepte 
  solicitudes desde un cliente web.

- Para poder usarlo en nuestro código, tenemos que 
  requerirlo con la instrucción "require()".

- Ejemplo: require('http') siempre devolverá lo 
  construido en el módulo HTTP.
*/


var os_test = require("./os_test")
var qs_test = require("./query_string_test")
var crypto_test = require("./crypto_test")

/*
   Servidor HTTP paso a paso
   -------------------------
   - Se crea el servidor a partir del módulo HTTP

   - El método createServer(...) recibirá un callback que se 
     ejecutará cada vez que el servidor reciba una petición.

   - La función callback que enviamos a createServer() recibe 
     dos parámetros que son la petición y la respuesta

   - La respuesta la usaremos para enviarle datos al cliente 
     que hizo la petición  

   - Con response.end() se termina la petición y se envian 
     los datos al cliente

*/
// Objeto http sobre el que podemos invocar métodos 
// que estaban en el módulo requerido. 
var http = require("http")

var server = http.createServer(function (request, response) {
   console.log("Tu servidor está listo en " + this.address().port)
   
   // https://www.freeformatter.com/json-formatter.html

   // Script ejecución
   // $ npm run start:servidor

   //////////////////////////////////////////////
   // Ejemplo 1: Manejo de headers en response //
   //////////////////////////////////////////////
   // response.setHeader('Content-Type', 'text/html;charset=UTF-8');
   // Object.getOwnPropertyNames(request.headers)
   // response.write(JSON.stringify(request.headers))
   // response.write(`<b>Buenos días</b>`)

   //////////////////////////////////////////////
   // Ejemplo 2: Módulo built-in "querystring" //
   //////////////////////////////////////////////
   // response.setHeader('Content-Type', 'application/json;charset=UTF-8');
   // Ejemplo de url a ejecutar: http://localhost:3000/?param1=Juan&param2=Perez
   // response.write(qs_test.obtenerParamsQS(request))

   /////////////////////////////////////
   // Ejemplo 3: Módulo built-in "os" //
   /////////////////////////////////////
   // response.setHeader('Content-Type', 'application/json;charset=UTF-8');
   // response.write(os_test.obtenerInfoSistema())

   /////////////////////////////////////////
   // Ejemplo 4: Módulo built-in "cypher" //
   /////////////////////////////////////////
   // $ npm install dotenv --save
   require('dotenv').config()
   var key = new Buffer(process.env.KEY, process.env.ENCODING);
   var datoEncriptado = crypto_test.encriptar(key, "Pa$$W0rd.2021")
   response.setHeader('Content-Type', 'text/html;charset=UTF-8');
   response.write(`Dato encriptado: <b>${datoEncriptado}</b> <br>`) 
   response.write(
      `Dato Desencriptado: <b>${crypto_test.desencriptar(key, datoEncriptado)}</b>`)

   // Se termina la petición y se envian los datos al cliente
   response.end()
})

/*
   - Se le dice al servidor que escuche en el puerto 3000

   - "listen()" recibe también una función callback que indica 
      que se está listo y escuchando en el puerto configurado.

   - El servidor web se almacena en un archivo .js   
*/
server.listen(3000, function(request, response) {
   console.log("Tu servidor está listo en " + this.address().port)
})