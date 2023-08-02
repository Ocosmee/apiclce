import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Exportacion = sequelize.define('exportacion', {
    guiamaster: {
    type: DataTypes.STRING,
    allowNull: false
  },
  guiahouse: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  fhentalmacen:{
    type: DataTypes.DATEONLY,
    allowNull: false
  }, 
  fhexportacion:{
    type: DataTypes.DATE,
    allowNull: false
  }, 
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },  
   avion: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }, 
  idtipomercan: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  idtipoingr:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paisdest:{
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
    type: DataTypes.INTEGER,
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
  refrigerar:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  obs:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  tipomoneda:{
    type: DataTypes.STRING,
    allowNull: false
  }, 
  tipocambio:{
    type: DataTypes.DECIMAL(10,4),
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
  idlinea:{
    type: DataTypes.INTEGER,
    defaultValue: 0
  }, 
  consignatario:{
    type: DataTypes.STRING,
    allowNull: false
  },
  consigoriginal:{
    type: DataTypes.STRING,
    allowNull: false
  },
  domconsignat:{
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
  ubicacion:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  iduser:{
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  estatus:{
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  freezeTableName: true,
},
    
);

export default Exportacion;