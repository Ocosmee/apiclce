import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Cliente = sequelize.define('clientes', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING,
    defaultValue:""
  }, 
  rfc:{
    type: DataTypes.STRING,
    defaultValue: ""
  }, 
  email: {
    type: DataTypes.STRING,
    defaultValue:""
  }, 
  calle:{
    type: DataTypes.STRING,
     defaultValue: ""
  },
  numero:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  colonia:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  municipio:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  estado:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  cp:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  celular:{
    type: DataTypes.STRING,
    defaultValue: ""
  }, 
  diascredito:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  metodopago:{
    type: DataTypes.STRING,
    defaultValue: ""
  },
  nocuenta:{
    type: DataTypes.STRING,
    defaultValue: ""
  }
}, {
  freezeTableName: true,
},
    
);

export default Cliente;