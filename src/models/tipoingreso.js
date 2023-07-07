import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const TipoIngreso = sequelize.define('tipoingreso', {
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

export default TipoIngreso;