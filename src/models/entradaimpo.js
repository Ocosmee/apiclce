import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const EntradaImpo = sequelize.define('entradaimpo', {
  idvuelo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  guiahouse: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  fhentaduana:{
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  fhentalmacen:{
    type: DataTypes.DATE,
    allowNull: false
  }, 
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },  
  idtipomercan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idtipoingr:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paisorig:{
    type: DataTypes.STRING,
    allowNull: false
  },
  irregularidad:{
    type: DataTypes.STRING,
    allowNull: false
  },
  contenido:{
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion:{
    type: DataTypes.STRING,
    allowNull: false
  },
  cantbulto:{
    type: DataTypes.DECIMAL(10,2),
    defaultValue: 0
  },
  peso:{
    type: DataTypes.DECIMAL(12,2),
    defaultValue: 0
  },
  umedida:{
    type: DataTypes.STRING,
    allowNull: false
  },
  tipomoneda:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
  tipocambio:{
    type: DataTypes.DECIMAL(10,2),
    defaultValue: 0
  },
  valormercan:{
    type: DataTypes.DECIMAL(20,2),
    defaultValue: 0
  },
  valorpeso:{
    type: DataTypes.DECIMAL(20,2),
    defaultValue: 0
  },
  refrigerar:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  nombremitent:{
    type: DataTypes.STRING,
    allowNull: false
  },
  domcremitent:{
    type: DataTypes.STRING,
    allowNull: false
  },
  consignatario:{
    type: DataTypes.STRING,
    allowNull: false
  },
  domconsignatario:{
    type: DataTypes.STRING,
    allowNull: false
  },
  regprevio:{
    type: DataTypes.STRING,
    allowNull: false
  },
  fhregprev:{
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  obs:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  iduser:{
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  estatus:{
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  freezeTableName: true,
},
    
);

export default EntradaImpo;