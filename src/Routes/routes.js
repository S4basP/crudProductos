import { Router } from "express";
import { verDatos } from '../controllers/consultas.js';
const router = Router();


router.get('/impDatos', verDatos);



export default router;