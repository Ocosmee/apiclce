import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Almacenaje = sequelize.define('almacenaje', {
  de: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },
  a: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  unoa30:{
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  treinta1a60: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  masd60:{
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },
  idanio: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
},
    
);

export default Almacenaje;