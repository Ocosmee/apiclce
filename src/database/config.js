import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config(); 

 export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME , process.env.DATABASE_PASSWORD , 
    {
      dialect: "mssql", 
      host: process.env.DATABASE_HOST,
      port: 1433, 
      logging: false
    }, 
);  