import { Router } from "express";
import { 
    checkAnnioExist, 
    createManejosYprevios, 
    deleteManejoyPrevio, 
    getAllManejosyPrevios, 
    getRowsByAnio, 
    getRowsManejoyPrevioByAnio, 
    updateRowManejoyPrevio 
} from "../controllers/manejoyprevio.js";

 
const manejoYprevioRoute = Router();

manejoYprevioRoute.post('/create', createManejosYprevios);
manejoYprevioRoute.post('/checkanio/:idanio', checkAnnioExist);
manejoYprevioRoute.get('/getall', getAllManejosyPrevios);
manejoYprevioRoute.get('/byanio/:idanio', getRowsManejoyPrevioByAnio);
manejoYprevioRoute.get('/anios/', getRowsByAnio); 
manejoYprevioRoute.put('/updatesinglerow/:id/:manejo/:previo/:total', updateRowManejoyPrevio);
manejoYprevioRoute.delete('/byidanio/:idanio', deleteManejoyPrevio);

export default manejoYprevioRoute;