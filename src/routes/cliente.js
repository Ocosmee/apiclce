import { Router } from "express";
import { createCliente, deleteCliente, getAllClientes, getClienteById, updateCliente } from "../controllers/cliente.js";
 
const clienteRoute = Router();

clienteRoute.post('/create', createCliente);
clienteRoute.get('/getall', getAllClientes);
clienteRoute.get('/byid/:id', getClienteById);
clienteRoute.put('/:id/update', updateCliente);
clienteRoute.delete('/byid/:id', deleteCliente);

export default clienteRoute;