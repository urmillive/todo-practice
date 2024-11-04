import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRouter);

app.listen(3000, () => {
    console.log('server is up and running on port', 3000);
});
