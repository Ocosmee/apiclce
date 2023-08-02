import { Router } from "express";
import { 
    changeStatusSalidaExpo, 
    createSalidaExpo, 
    getSalidaExpoById, 
    getSalidaExpoCreadas, 
    updateSalidaExpo 
} from "../controllers/salidaexpo.js";
   
const salidaExpo = Router();

salidaExpo.post('/create', createSalidaExpo); 
salidaExpo.get('/created', getSalidaExpoCreadas);
salidaExpo.get('/byid/:id', getSalidaExpoById); 
salidaExpo.put('/update/:id', updateSalidaExpo);
salidaExpo.put('/changestatus/:id/:estatus', changeStatusSalidaExpo);

export default salidaExpo;