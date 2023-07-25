import { sequelize } from "../database/config.js";
import Almacenaje from "../models/almacenaje.js";

export const checkAnnioExist = async(req, res)=>{
    try {
        const anioExist = await Almacenaje.findAll({
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

export const createAlmacenaje = async(req, res)=>{
    try { 
        const newAlmacenaje = new Almacenaje({
            de: req.body.de,
            a:  req.body.a, 
            unoa30: req.body.a30, 
            treinta1a60:  req.body.a60, 
            masd60: req.body.masd60,
            idanio: req.body.idanio
        });
        await newAlmacenaje.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
} 

export const getRowsAlmacenajeByAnio = async (req, res)=>{
    try {
        const rowsAlmacenaje = await Almacenaje.findAll({
            where:{
                idanio: req.params.idanio
            }
        })
        res.status(200).json(rowsAlmacenaje);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateRowAlmacenaje  = async(req, res)=>{
    try { 
        await Almacenaje.update( 
            {
                unoa30: req.params.treinta, 
                treinta1a60: req.params.sesenta, 
                masd60: req.params.masd60,
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
        const rows = await Almacenaje.findAll({  
            attributes: [
                'idanio',  
                [sequelize.literal(`( SELECT anio FROM anios WHERE  id = almacenaje.idanio)`),'anioname']  
            ], 
            group: ['idanio'] 
         });

         res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteAlmacenaje = async(req, res)=>{
    try {
        await Almacenaje.destroy({
            where:{idanio: req.params.idanio},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}