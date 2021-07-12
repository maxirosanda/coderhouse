const got = require('got');

let url = 'http://localhost:5000/egreso';

const getNumbers = async () => {
    try {
        let response = await got(url);
        console.log(response.body);
    } catch (e) {
        console.log("Error: ", e);
    }
};


setInterval( async () => {
    await getNumbers();
}, 1000)
