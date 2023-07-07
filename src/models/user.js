import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const User = sequelize.define('usuario', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rol:{
    type: DataTypes.STRING,
    allowNull: false
  },
  estatus:{
    type: DataTypes.BOOLEAN,
    default: false
  },
  
}, {
  freezeTableName: true,
  defaultScope: {
    attributes: {
      exclude: ['password']
    }
  }
},
    
);

export default User;