const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

app.listen(3000, () => {
    console.log('server is up and running on port', 3000);
});
