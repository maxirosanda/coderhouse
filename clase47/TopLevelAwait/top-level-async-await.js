import axios from 'axios';

//try {
    //const response = await axios('https://quote-garden.herokuapp.com/api/v2/quotes/random');
    const response = await axios('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
/* }
catch(error) {
    console.log(error)
} */