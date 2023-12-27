import router from './Routes/routes.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());;
app.use(morgan('dev'));
app.use(router);
app.use( ( req, res, next) =>
{
    res.status(404).send("Page not found !!!!");
});


 export default app;