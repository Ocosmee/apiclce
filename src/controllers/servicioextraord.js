import { sequelize } from "../database/config.js";
import ServicioExtraordinario from "../models/servicioextraordinario.js";


export const checkAnnioExist = async(req, res)=>{
    try {
        const anioExist = await ServicioExtraordinario.findAll({
            where: { idanio: req.params.idanio}
        })

        if(anioExist.length > 0){
            res.status(400).json({msg: "Ya existen registros con este año, elija otro"})
        }else{
            res.status(204).send("ok")
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createServicioExtraordinario = async(req, res)=>{
    try { 
        const newServicioExtraordinario = new ServicioExtraordinario({
            lunesav: req.body.lunesav,
            sabdomfestivos:  req.body.sabdomfestivos,
            idanio: req.body.idanio 
        });
        await newServicioExtraordinario.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
} 

export const getRowsServicioExtraordinarioByAnio = async (req, res)=>{
    try {
        const rowsServicioExt = await ServicioExtraordinario.findAll({
            where:{
                idanio: req.params.idanio
            }
        })
        res.status(200).json(rowsServicioExt);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateRowServicioExt  = async(req, res)=>{
    try { 
        await ServicioExtraordinario.update( 
            {
                lunesav: req.params.lunesav, 
                sabdomfestivos: req.params.sabdomfestivos,  
            },
            {
                where: { id: req.params.id },
            }
        );

        res.status(200).json({msg: "Se actualizaron los datos!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getRowsByAnio = async(req, res)=>{
    try {
        const rows = await ServicioExtraordinario.findAll({  
            attributes: [
                'idanio',  
                [sequelize.literal(`(SELECT anio FROM anios WHERE  id = servioextraordinario.idanio)`),'anioname']  
            ], 
            group: ['idanio'] 
         });

         res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteServicioExt = async(req, res)=>{
    try {
        await ServicioExtraordinario.destroy({
            where:{idanio: req.params.idanio},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}