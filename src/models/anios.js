import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Anio = sequelize.define('anios', {
  anio: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
}, {
  freezeTableName: true,
  timestamps: false
},
    
);

export default Anio;