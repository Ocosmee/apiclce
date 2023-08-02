import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const SalidaImpo = sequelize.define('salidaimpo', {
    identimpo:{
        type: DataTypes.INTEGER,
        llowNull: false
    },
    tiposalida:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fhsalida:{
        type: DataTypes.DATE,
        allowNull: false
    },
    agente:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idalmacen:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clavepedim:{
        type: DataTypes.STRING,
        allowNull: false
    },
    pedimento:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    numacta:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numoficio:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    numrecibo:{
        type: DataTypes.STRING,
        allowNull: false
    },  
    comentarios:{
        type: DataTypes.STRING,
        allowNull: false
    },
    iduser:{
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    estatus:{
        type: DataTypes.INTEGER,
        defaultValue: 1
    } 
},{
    freezeTableName: true
})

export default SalidaImpo;