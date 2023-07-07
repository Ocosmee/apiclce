import { Router } from "express";
import { createTipoIngreso, deleteTipoIngreso, getAllTipoIngresos, getTipoIngresoById, updateTipoIngreso } from "../controllers/tipoingreso.js";
 
const tipoIngresoRoute = Router();

tipoIngresoRoute.post('/create', createTipoIngreso);
tipoIngresoRoute.get('/getall', getAllTipoIngresos);
tipoIngresoRoute.get('/byid/:id', getTipoIngresoById);
tipoIngresoRoute.put('/:id/update', updateTipoIngreso);
tipoIngresoRoute.delete('/byid/:id', deleteTipoIngreso);

export default tipoIngresoRoute;