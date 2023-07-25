import { Router } from "express";
import { getPaises } from "../controllers/pais.js";
  
const paisRoute = Router();

paisRoute.get('/allpaises', getPaises); 

export default paisRoute;