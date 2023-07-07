import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Agente = sequelize.define('agentes', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  patente: {
    type: DataTypes.STRING,
    defaultValue: ""
  }, 
  calle:{
    type: DataTypes.STRING,
    allowNull: false
  },
  numero:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  colonia:{
    type: DataTypes.STRING,
    allowNull: false
  },
  municipio:{
    type: DataTypes.STRING,
    allowNull: false
  },
  estado:{
    type: DataTypes.STRING,
    allowNull: false
  },
  cp:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  celular:{
    type: DataTypes.STRING,
    defaultValue: ""
  }
}, {
  freezeTableName: true,
},
    
);

export default Agente;