import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Custodia = sequelize.define('custodia', {
  de: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },
  a: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  "unoa7":{
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  "ochoa15": {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  }, 
  "dieciseisa30":{
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },
  "segundomes":{
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

export default Custodia;