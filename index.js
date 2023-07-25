import express from 'express';
import cors from 'cors'; 

import { connection } from './src/database/connection.js';
import './src/database/associations.js'

import authRoute from './src/routes/auth.js';
import almacenRoute from './src/routes/almacen.js';
import agenteRoute from './src/routes/agente.js';
import lineaAereaRoute from './src/routes/lineaaerea.js';
import operacionRoute from './src/routes/operacion.js';
import tipoIngresoRoute from './src/routes/tipoingreso.js';
import tipoDomicilioRoute from './src/routes/tipodomicilio.js';
import tipoIrregularidadRoute from './src/routes/tipoirregularidad.js';
import tipoMercanciaRoute from './src/routes/tipomercancia.js';
import tipoSalidaRoute from './src/routes/tiposalida.js';
import conceptocobroRoute from './src/routes/conceptocobro.js';
import clienteRoute from './src/routes/cliente.js';
import anioRoute from './src/routes/anio.js';
import manejoYprevioRoute from './src/routes/manejoyprevio.js';
import almacenajeRoute from './src/routes/almacenaje.js';
import custodiaRoute from './src/routes/custodia.js';
import servicioExtRoute from './src/routes/servicioextraord.js';
import vueloRoute from './src/routes/vuelo.js';
import entradaImpo from './src/routes/entradaimpo.js';
import paisRoute from './src/routes/pais.js';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/auth', authRoute);
app.use('/almacen', almacenRoute);
app.use('/agente', agenteRoute);
app.use('/lineaaerea', lineaAereaRoute);
app.use('/operacion', operacionRoute);
app.use('/tipoingreso', tipoIngresoRoute);
app.use('/tipodomicilio', tipoDomicilioRoute);
app.use('/tipoirregularidad', tipoIrregularidadRoute);
app.use('/tipomercancia', tipoMercanciaRoute);
app.use('/tiposalida', tipoSalidaRoute);
app.use('/conceptocobro', conceptocobroRoute);
app.use('/cliente', clienteRoute);
app.use('/anio', anioRoute);
app.use('/manejoyprevio', manejoYprevioRoute);
app.use('/almacenaje', almacenajeRoute);
app.use('/custodia', custodiaRoute);
app.use('/servicioext', servicioExtRoute);
app.use('/vuelo', vueloRoute);
app.use('/entradaimpo', entradaImpo);
app.use('/pais', paisRoute);

connection();

app.listen(PORT, ()=>{
    console.log('app runing at port '+ PORT);
})