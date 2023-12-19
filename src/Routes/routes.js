import { Router } from "express";
import { consultarDatos, subirDatos} from '../controllers/consultas.js';
const router = Router();


router.get('/consultarDatos', consultarDatos);

router.post('/subirDatos', ( req, res ) =>
{
    const { nombre, unidades, precio_Por_Unidad } = req.body;
    console.log(`Nombre ${nombre}, unidades: ${unidades}, precio: ${precio_Por_Unidad}`);
    res.send("New Post");

} );



export default router;