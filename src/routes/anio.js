import { Router } from "express";
import { getAnios } from "../controllers/anio.js";
 
const anioRoute = Router();
 
anioRoute.get('/getall', getAnios); 

export default anioRoute;