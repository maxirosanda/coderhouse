const https = require('https');
const fs = require('fs');


const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 443,
    path: '/posts',
    method: 'GET'
}


const req = https.request(options, res => {
    let response = '';

    res.on('data', d => {
        response += d;
    });

    res.on('end', () => {
        let posts = JSON.parse(response);
        fs.writeFile('./postHttps.json', JSON.stringify(posts, null, '\t'), e => {
            console.log("escritura correcta");
        })
    })
})

req.on('error', e => {
    console.log("error: ", e)
});

req.end();