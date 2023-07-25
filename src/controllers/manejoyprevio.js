import { sequelize } from "../database/config.js";
import Anio from "../models/anios.js";
import ManejosYprevios from "../models/manejosyprevios.js";

export const checkAnnioExist = async(req, res)=>{
    try {
        const anioExist = await ManejosYprevios.findAll({
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

export const createManejosYprevios = async(req, res)=>{
    try {
        delete req.body.idArray;
  
        const newManejosYprevios = new ManejosYprevios(req.body);
        await newManejosYprevios.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllManejosyPrevios = async (req, res)=>{
    try {
        const newManejosyPrevios = await ManejosYprevios.findAll();
        res.status(200).json(newManejosyPrevios);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getRowsManejoyPrevioByAnio = async (req, res)=>{
    try {
        const manejosYprev = await ManejosYprevios.findAll({
            where:{
                idanio: req.params.idanio
            }
        })
        res.status(200).json(manejosYprev);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateRowManejoyPrevio  = async(req, res)=>{
    try {
          
        await ManejosYprevios.update(
            {
                manejo: req.params.manejo, 
                previo: req.params.previo, 
                total: req.params.total,
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
        const rows = await ManejosYprevios.findAll({  
            attributes: [
                'idanio',  
                [sequelize.literal(`( SELECT anio FROM anios WHERE  id = manejoyprevio.idanio)`),'anioname']  
            ], 
            group: ['idanio'] 
         });

         res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteManejoyPrevio = async(req, res)=>{
    try {
        await ManejosYprevios.destroy({
            where:{idanio: req.params.idanio},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}