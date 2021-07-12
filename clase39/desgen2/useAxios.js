const axios = require("axios");

let url = 'http://localhost:5000';

( async () => {
    try {
        let response = await axios(url);
        console.log(response.data);
    } catch (e) {
        console.log("Error: ", e);
    }
})();