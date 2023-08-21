import { sequelize } from "../database/config.js";
import Vuelo from "../models/vuelo.js";

export const createVuelo = async(req, res)=>{
    try { 
        const { count } = await Vuelo.findAndCountAll();
        let folio = count + 1;
        const newVuelo = new Vuelo({
            idlinaerea: req.body.idlinaerea,
            tipovuelo: req.body.tipovuelo,
            novuelo: req.body.novuelo,
            guiamaster: folio +"-"+ req.body.guiamaster,
            fechacapt: req.body.fechacapt,
            guiasvuelo: folio +"-"+ req.body.guiasvuelo,
            iduser: req.body.iduser, 
        });
        await newVuelo.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
} 

export const getFolio = async(req, res)=>{
    try {
        const rows = await Vuelo.findAll();
        res.status(200).json({rows: rows.length})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getVueloById = async(req, res)=>{
    try {
        const rows = await Vuelo.findAll({
            where: {id: req.params.id}
        });
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getVuelosCreados = async(req, res)=>{
    try {
        const rows = await Vuelo.findAll({ where: {estatus: 1}});
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateVuelo = async(req, res)=>{
    try {
        const rows = await Vuelo.update({
            idlinaerea: req.body.idlinaerea,
            tipovuelo: req.body.tipovuelo,
            novuelo: req.body.novuelo,
            guiamaster: req.body.guiamaster,
            fechacapt: req.body.fechacapt,
            guiasvuelo: req.body.guiasvuelo,
            iduser: req.body.iduser,
        },
        {
            where: {id: req.params.id}
        });
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const changeStatusVuelo = async(req, res)=>{
    try {
        await Vuelo.update({ estatus: req.params.estatus}, {where: {id: req.params.id}});
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}