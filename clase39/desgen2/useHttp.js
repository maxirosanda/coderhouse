const http = require('http');
const fs = require('fs');


const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/',
    method: 'GET'
}


const req = http.request(options, res => {
    let response = '';

    res.on('data', d => {
        response += d;
    });

    res.on('end', () => {
        console.log(JSON.parse(response));
    })
})

req.on('error', e => {
    console.log("error: ", e)
});

req.end();