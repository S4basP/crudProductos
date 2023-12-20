import { Router } from "express";
import { actualizarProducto, consultarProductos, eliminarProducto, subirProducto} from '../controllers/consultas.js';
const router = Router();


router.get('/consultarProductos', consultarProductos);

router.post('/subirProducto', subirProducto);

router.delete('/eliminarProducto', eliminarProducto);

router.put('/actualizarProducto', actualizarProducto);



export default router;