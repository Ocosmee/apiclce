import { Router } from "express";
import { 
    checkAnnioExist,
    createCustodia,
    deleteCustodia,
    getRowsByAnio,
    getRowsCustodiaByAnio,
    updateRowCustodia
 } from "../controllers/custodia.js";
 
const custodiaRoute = Router();

custodiaRoute.post('/create', createCustodia);
custodiaRoute.post('/checkanio/:idanio', checkAnnioExist); 
custodiaRoute.get('/byanio/:idanio', getRowsCustodiaByAnio);
custodiaRoute.get('/anios/', getRowsByAnio); 
custodiaRoute.put('/updatesinglerow/:id/:unoa7/:ochoa15/:dieciseisa30/:segundomes', updateRowCustodia);
custodiaRoute.delete('/byidanio/:idanio', deleteCustodia);

export default custodiaRoute;