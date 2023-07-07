import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const Pais = sequelize.define('pais', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  continente: {
    type: DataTypes.STRING,
    allowNull: true
  },  
}, {
  freezeTableName: true,
},
    
);

export default Pais;