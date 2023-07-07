import  {sequelize}   from "./config.js";

export const connection = async()=>{
    try {
        await sequelize.sync({ force: false });
         
        console.log('Conexion esxitosa a la base de datos')
        
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}