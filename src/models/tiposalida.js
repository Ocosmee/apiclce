import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const TipoSalida = sequelize.define('tiposalida', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
}, {
  freezeTableName: true,
}, 
);

export default TipoSalida;