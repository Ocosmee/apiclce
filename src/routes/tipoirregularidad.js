import { Router } from "express";
import { createTipoIrregularidad, deleteTipoIrregularidad, getAllTipoIrregularidads, getTipoIrregularidadById, updateTipoIrregularidad } from "../controllers/tipoirregularidad.js";
 
const tipoIrregularidadRoute = Router();

tipoIrregularidadRoute.post('/create', createTipoIrregularidad);
tipoIrregularidadRoute.get('/getall', getAllTipoIrregularidads);
tipoIrregularidadRoute.get('/byid/:id', getTipoIrregularidadById);
tipoIrregularidadRoute.put('/:id/update', updateTipoIrregularidad);
tipoIrregularidadRoute.delete('/byid/:id', deleteTipoIrregularidad);

export default tipoIrregularidadRoute;