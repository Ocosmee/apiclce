import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const ServicioExtraordinario = sequelize.define('servioextraordinario', { 
  lunesav: {
    type: DataTypes.DECIMAL(12,2),
    allowNull: false
  },  
  sabdomfestivos:{
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

export default ServicioExtraordinario;