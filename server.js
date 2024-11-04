const express = require('express')
const app = express();

app.use('/', (req, response) => {
    response.send('<h1>Hello</h1>');
});

app.listen(3000, () => {
    console.log('server is up and running.');
})