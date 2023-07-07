import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Operacion = sequelize.define('operaciones', {
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

export default Operacion;