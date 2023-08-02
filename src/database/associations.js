import User from "../models/user.js";
import Almacen from "../models/almacen.js";
import Agente from "../models/agentes.js";
import LineaAerea from "../models/lineasAereas.js";
import Operacion from "../models/operaciones.js";
import Pais from "../models/pais.js";
import TipoIngreso from "../models/tipoingreso.js";
import TipoDomicilio from "../models/tipodomicilio.js";
import TipoIrregularidad from "../models/tipoirregularidades.js";
import TipoMercancia from "../models/tipomercancia.js";
import TipoSalida from "../models/tiposalida.js";
import ConceptoCobro from "../models/conceptocobro.js";
import Cliente from "../models/clientes.js";
import Anio from "../models/anios.js";
import ManejosYprevios from "../models/manejosyprevios.js";
import Almacenaje from "../models/almacenaje.js";
import Custodia from "../models/custodia.js";
import ServicioExtraordinario from "../models/servicioextraordinario.js";
import Vuelo from "../models/vuelo.js";
import EntradaImpo from "../models/entradaimpo.js";
import SalidaImpo from "../models/salidaimpo.js";
import Exportacion from "../models/exportacion.js";
import SalidaExpo from "../models/salidaexpo.js";

Anio.hasMany(ManejosYprevios, {foreignKey: "idanio"});
ManejosYprevios.belongsTo(Anio, {foreignKey: "idanio"});

Anio.hasMany(Almacenaje, {foreignKey: "idanio"});
Almacenaje.belongsTo(Anio, {foreignKey: "idanio"});

Anio.hasMany(Custodia, {foreignKey: "idanio"});
Custodia.belongsTo(Anio, {foreignKey: "idanio"});

Anio.hasMany(ServicioExtraordinario, {foreignKey: "idanio"});
ServicioExtraordinario.belongsTo(Anio, {foreignKey: "idanio"});

//IMPO
User.hasMany(EntradaImpo, {foreignKey: "iduser"});
EntradaImpo.belongsTo(User, {foreignKey: "iduser"});

Vuelo.hasOne(EntradaImpo, {foreignKey: "idvuelo"});
EntradaImpo.belongsTo(Vuelo, {foreignKey: "idvuelo"});

Cliente.hasOne(EntradaImpo, {foreignKey: "idcliente"});
EntradaImpo.belongsTo(Cliente, {foreignKey: "idcliente"});

TipoMercancia.hasOne(EntradaImpo, {foreignKey: "idtipomercan"});
EntradaImpo.belongsTo(TipoMercancia, {foreignKey: "idtipomercan"});

TipoIngreso.hasOne(EntradaImpo, {foreignKey: "idtipoingr"});
EntradaImpo.belongsTo(TipoIngreso, {foreignKey: "idtipoingr"});

EntradaImpo.hasOne(SalidaImpo, {foreignKey: "identimpo"});
SalidaImpo.belongsTo(EntradaImpo, {foreignKey: "identimpo"});

//EXPO
User.hasMany(Exportacion, {foreignKey: "iduser"});
Exportacion.belongsTo(User, {foreignKey: "iduser"});

LineaAerea.hasOne(Exportacion, {foreignKey: "idlinea"});
Exportacion.belongsTo(LineaAerea, {foreignKey: "idlinea"});

Cliente.hasOne(Exportacion, {foreignKey: "idcliente"});
Exportacion.belongsTo(Cliente, {foreignKey: "idcliente"});

TipoMercancia.hasOne(Exportacion, {foreignKey: "idtipomercan"});
Exportacion.belongsTo(TipoMercancia, {foreignKey: "idtipomercan"});

TipoIngreso.hasOne(Exportacion, {foreignKey: "idtipoingr"});
Exportacion.belongsTo(TipoIngreso, {foreignKey: "idtipoingr"});

Exportacion.hasOne(SalidaExpo, {foreignKey: "idexpo"});
SalidaExpo.belongsTo(Exportacion, {foreignKey: "idexpo"});
