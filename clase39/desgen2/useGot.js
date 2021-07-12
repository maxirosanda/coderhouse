const got = require('got');

let url = 'http://localhost:5000';

( async () => {
    try {
        let response = await got(url);
        console.log(response.body);
    } catch (e) {
        console.log("Error: ", e);
    }
})();