import { Router } from "express";
import { 
    changeStatusVuelo,
    createVuelo, 
    getFolio, 
    getVueloById, 
    getVuelosCreados,
    updateVuelo
} from "../controllers/vuelo.js";

const vueloRoute = Router();

vueloRoute.post('/create', createVuelo);
vueloRoute.get('/folio', getFolio);
vueloRoute.get('/allvueloscreados/', getVuelosCreados);
vueloRoute.get('/byid/', getVueloById);
vueloRoute.put('/updatebyid/', updateVuelo);
vueloRoute.put('/changestatus/:id/:estatus', changeStatusVuelo);

export default vueloRoute;