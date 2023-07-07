import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const TipoIrregularidad = sequelize.define('tipoirregularidades', {
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

export default TipoIrregularidad;