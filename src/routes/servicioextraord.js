import { Router } from "express";
import { 
    checkAnnioExist,
    createServicioExtraordinario,
    deleteServicioExt,
    getRowsByAnio,
    getRowsServicioExtraordinarioByAnio,
    updateRowServicioExt
 } from "../controllers/servicioextraord.js";
 
const servicioExtRoute = Router();

servicioExtRoute.post('/create', createServicioExtraordinario);
servicioExtRoute.post('/checkanio/:idanio', checkAnnioExist); 
servicioExtRoute.get('/byanio/:idanio', getRowsServicioExtraordinarioByAnio);
servicioExtRoute.get('/anios/', getRowsByAnio); 
servicioExtRoute.put('/updatesinglerow/:id/:lunesav/:sabdomfestivos', updateRowServicioExt);
servicioExtRoute.delete('/byidanio/:idanio', deleteServicioExt);

export default servicioExtRoute;