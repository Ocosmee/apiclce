import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Vuelo = sequelize.define('vuelo', {
  idlinaerea: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipovuelo: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  novuelo:{
    type: DataTypes.INTEGER,
    allowNull: false
  }, 
  guiamaster: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  fechacapt:{
    type: DataTypes.DATE,
    allowNull: false
  },
  guiasvuelo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  iduser:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estatus:{
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
}, {
  freezeTableName: true,
},
    
);

export default Vuelo;