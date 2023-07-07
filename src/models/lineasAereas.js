import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const LineaAerea = sequelize.define('lineasaereas', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipovuelo: {
    type: DataTypes.STRING,
    allowNull: false
  },  
}, {
  freezeTableName: true,
},
    
);

export default LineaAerea;