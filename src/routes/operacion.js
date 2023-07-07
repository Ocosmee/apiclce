import { Router } from "express";
import { createOperacion, deleteOperacion, getAllOperacions, getOperacionById, updateOperacion } from "../controllers/operacion.js";
 
const operacionRoute = Router();

operacionRoute.post('/create', createOperacion);
operacionRoute.get('/getall', getAllOperacions);
operacionRoute.get('/byid/:id', getOperacionById);
operacionRoute.put('/:id/update', updateOperacion);
operacionRoute.delete('/byid/:id', deleteOperacion);

export default operacionRoute;