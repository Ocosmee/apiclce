import { Router } from "express";
import { 
    changeStatusEntradaImpo,
    createEntradaImpo, 
    getEntradaImpoById, 
    getEntradaImpoCreadas,
    getFolio,
    updateEntradaImpo
} from "../controllers/entradaimpo.js";
 
const entradaImpo = Router();

entradaImpo.post('/create', createEntradaImpo);
entradaImpo.get('/getfolio', getFolio); 
entradaImpo.get('/created', getEntradaImpoCreadas);
entradaImpo.get('/byid/:id', getEntradaImpoById); 
entradaImpo.put('/update/:id', updateEntradaImpo);
entradaImpo.put('/changestatus/:id/:estatus', changeStatusEntradaImpo);

export default entradaImpo;