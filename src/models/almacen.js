import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Almacen = sequelize.define('almacen', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rfc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  razonso:{
    type: DataTypes.STRING,
    allowNull: false
  },
  calle:{
    type: DataTypes.STRING,
    allowNull: false
  },
  numero:{
    type: DataTypes.STRING,
    allowNull: false
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
}, {
  freezeTableName: true,
},
    
);

export default Almacen;