import { Router } from "express";
import { 
    checkAnnioExist,
    createAlmacenaje,
    deleteAlmacenaje,
    getRowsAlmacenajeByAnio,
    updateRowAlmacenaje,
    getRowsByAnio
 } from "../controllers/almacenaje.js"; 
 
 
const almacenajeRoute = Router();

almacenajeRoute.post('/create', createAlmacenaje);
almacenajeRoute.post('/checkanio/:idanio', checkAnnioExist); 
almacenajeRoute.get('/byanio/:idanio', getRowsAlmacenajeByAnio);
almacenajeRoute.get('/anios/', getRowsByAnio); 
almacenajeRoute.put('/updatesinglerow/:id/:treinta/:sesenta/:masd60', updateRowAlmacenaje);
almacenajeRoute.delete('/byidanio/:idanio', deleteAlmacenaje);

export default almacenajeRoute;