import { Router } from "express";
import { createTipoMercancia, deleteTipoMercancia, getAllTipoMercancias, getTipoMercanciaById, updateTipoMercancia } from "../controllers/tipomercancia.js";
 
const tipoMercanciaRoute = Router();

tipoMercanciaRoute.post('/create', createTipoMercancia);
tipoMercanciaRoute.get('/getall', getAllTipoMercancias);
tipoMercanciaRoute.get('/byid/:id', getTipoMercanciaById);
tipoMercanciaRoute.put('/:id/update', updateTipoMercancia);
tipoMercanciaRoute.delete('/byid/:id', deleteTipoMercancia);

export default tipoMercanciaRoute;