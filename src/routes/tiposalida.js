import { Router } from "express";
import { createTipoSalida, deleteTipoSalida, getAllTipoSalidas, getTipoSalidaById, updateTipoSalida } from "../controllers/tiposalida.js";
 
const tipoSalidaRoute = Router();

tipoSalidaRoute.post('/create', createTipoSalida);
tipoSalidaRoute.get('/getall', getAllTipoSalidas);
tipoSalidaRoute.get('/byid/:id', getTipoSalidaById);
tipoSalidaRoute.put('/:id/update', updateTipoSalida);
tipoSalidaRoute.delete('/byid/:id', deleteTipoSalida);

export default tipoSalidaRoute;