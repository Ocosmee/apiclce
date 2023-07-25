import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const ManejosYprevios = sequelize.define('manejoyprevio', {
  de: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },
  a: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  manejo:{
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  previo: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  total:{
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

export default ManejosYprevios;