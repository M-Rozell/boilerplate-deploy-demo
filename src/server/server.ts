import * as express from 'express';
import apiRouter from './routes';
import * as morgan from 'morgan' //for logging stuff

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));//to make sure my public folder is served with everything inside of it
app.use(express.json()); //body-parser
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
