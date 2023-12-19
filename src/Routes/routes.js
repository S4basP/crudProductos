import { Router } from "express";
import { consultarDatos, subirDatos} from '../controllers/consultas.js';
const router = Router();


router.get('/consultarDatos', consultarDatos);

router.post('/subirDatos', subirDatos);



export default router;