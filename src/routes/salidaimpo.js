import { Router } from "express";
import { 
    changeStatusSalidaImpo,
    createSalidaImpo, 
    getSalidaImpoById, 
    getSalidaImpoCreadas,
    updateSalidaImpo,
} from "../controllers/salidaimpo.js";
 
 
const salidaImpo = Router();

salidaImpo.post('/create', createSalidaImpo); 
salidaImpo.get('/created', getSalidaImpoCreadas);
salidaImpo.get('/byid/:id', getSalidaImpoById); 
salidaImpo.put('/update/:id', updateSalidaImpo);
salidaImpo.put('/changestatus/:id/:estatus', changeStatusSalidaImpo);

export default salidaImpo;