import { Router } from "express";
import { createConceptoCobro, deleteConceptoCobro, getAllConceptoCobros, getConceptoCobroById, updateConceptoCobro } from "../controllers/conceptocobro.js";
 
const conceptocobroRoute = Router();

conceptocobroRoute.post('/create', createConceptoCobro);
conceptocobroRoute.get('/getall', getAllConceptoCobros);
conceptocobroRoute.get('/byid/:id', getConceptoCobroById);
conceptocobroRoute.put('/:id/update', updateConceptoCobro);
conceptocobroRoute.delete('/byid/:id', deleteConceptoCobro);

export default conceptocobroRoute;