import { Router } from "express";
import { createAgente, deleteAgente, getAgenteById, getAllAgentes, updateAgente } from "../controllers/agente.js";

const agenteRoute = Router();

agenteRoute.post('/create', createAgente);
agenteRoute.get('/getall', getAllAgentes);
agenteRoute.get('/byid/:id', getAgenteById);
agenteRoute.put('/:id/update', updateAgente);
agenteRoute.delete('/byid/:id', deleteAgente);

export default agenteRoute;