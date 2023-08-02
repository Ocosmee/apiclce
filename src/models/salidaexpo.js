import { DataTypes } from 'sequelize'; 
import { sequelize } from '../database/config.js';

const SalidaExpo = sequelize.define('salidaexpo', {
    idexpo:{
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
    tipotransp:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idlineaerea:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    vuelo:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    idalmacen:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    agente:{
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    impuesto: {
        type: DataTypes.INTEGER,
        defaultValue: 363
    },
    clavepedim:{
        type: DataTypes.STRING,
        allowNull: false
    },
    pedimento:{
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

export default SalidaExpo;