import { Router } from "express";
import { createAlmacen, deleteAlmacen, getAllAlmacenes, getAlmacenById, updateAlmacen } from "../controllers/almacen.js";

const almacenRoute = Router();

almacenRoute.post('/create', createAlmacen);
almacenRoute.get('/getall', getAllAlmacenes);
almacenRoute.get('/byid/:id', getAlmacenById);
almacenRoute.put('/:id/update', updateAlmacen);
almacenRoute.delete('/byid/:id', deleteAlmacen);

export default almacenRoute;