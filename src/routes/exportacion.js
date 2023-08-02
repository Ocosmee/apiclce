import { Router } from "express"; 
import { 
    changeStatusExportacion,
    createExportacion, 
    getExportacionById, 
    getExportacionCreadas, 
    getFolio,
    updateExportacion
 } from "../controllers/exportacion.js";
 
const exportacion = Router();

exportacion.post('/create', createExportacion);
exportacion.get('/getfolio', getFolio); 
exportacion.get('/created', getExportacionCreadas);
exportacion.get('/byid/:id', getExportacionById); 
exportacion.put('/update/:id', updateExportacion);
exportacion.put('/changestatus/:id/:estatus', changeStatusExportacion);

export default exportacion;