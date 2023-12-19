import router from './Routes/routes.js';
import express from 'express';
import morgan from 'morgan';


const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use( ( req, res, next) =>
{
    res.status(404).send("Page not found !!!!");
});


 export default app;