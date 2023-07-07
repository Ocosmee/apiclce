import { Router } from "express";
import { createTipoDomicilio, deleteTipoDomicilio, getAllTipoDomicilios, getTipoDomicilioById, updateTipoDomicilio } from "../controllers/tipodomicilio.js";
 
const tipoDomicilioRoute = Router();

tipoDomicilioRoute.post('/create', createTipoDomicilio);
tipoDomicilioRoute.get('/getall', getAllTipoDomicilios);
tipoDomicilioRoute.get('/byid/:id', getTipoDomicilioById);
tipoDomicilioRoute.put('/:id/update', updateTipoDomicilio);
tipoDomicilioRoute.delete('/byid/:id', deleteTipoDomicilio);

export default tipoDomicilioRoute;