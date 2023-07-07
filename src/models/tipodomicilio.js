import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const TipoDomicilio = sequelize.define('tipodomicilio', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },  
}, {
  freezeTableName: true,
},
    
);

export default TipoDomicilio;