const axios = require("axios");

let url = 'http://localhost:5000/ingreso';

const postNumbers = async () => {
    try {
        const number =  Math.floor(Math.random() * 1000);
        let response = await axios.post(url, {numero:number});
        console.log(response.data);
    } catch (e) {
        console.log("Error: ", e);
    }
};

setInterval( async () => {
    await postNumbers();
}, 2000);
