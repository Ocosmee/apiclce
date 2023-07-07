import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const TipoMercancia = sequelize.define('tipomercancias', {
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

export default TipoMercancia;