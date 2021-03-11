
const http = require('http');

let jotason= {
    nombre: "hernan",
    edad: 32
}

http.createServer( (req, res) => {

    let url = req.url;

    if( url === '/uno'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hola Mundo!</h1>")
        res.end();
    } else if (url === '/dos'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hola otro mundo Mundo!</h1>");
        res.end();
    } else if( url === '/tres'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(jotason));
    } else {
        res.write(405, {'Content-Type': 'text/html'});
        res.write("mi no enteder");
        res.end();
    }
}).listen( process.env.PORT || 5000, () => {
    console.log("running on port 5000");
})