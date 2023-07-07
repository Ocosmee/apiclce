import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const ConceptoCobro = sequelize.define('conceptocobro', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  cuotaminima: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }, 
}, {
  freezeTableName: true,
}, 
);

export default ConceptoCobro;