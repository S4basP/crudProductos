import { Router } from "express";
import { consultarDatos, eliminarProducto, subirDatos} from '../controllers/consultas.js';
const router = Router();


router.get('/consultarDatos', consultarDatos);

router.post('/subirDatos', subirDatos );

router.delete('/eliminarProducto', eliminarProducto);



export default router;