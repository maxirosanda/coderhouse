require('http').createServer( (req, res) => {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify({FyH: new Date().toLocaleString()}));
}).listen( 5000, () => { console.log("escuchando en puerto 5000")});