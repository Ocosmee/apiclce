import { Router } from "express";
import { createLineaAerea, deleteLineaAerea, getAllLineaAereas, getLineaAereaById, updateLineaAerea } from "../controllers/lineasaereas.js";
 

const lineaAereaRoute = Router();

lineaAereaRoute.post('/create', createLineaAerea);
lineaAereaRoute.get('/getall', getAllLineaAereas);
lineaAereaRoute.get('/byid/:id', getLineaAereaById);
lineaAereaRoute.put('/:id/update', updateLineaAerea);
lineaAereaRoute.delete('/byid/:id', deleteLineaAerea);

export default lineaAereaRoute;