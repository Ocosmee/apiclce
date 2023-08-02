import { sequelize } from "../database/config.js";
import SalidaImpo from "../models/salidaimpo.js";

export const createSalidaImpo = async(req, res)=>{
    try {
         
        const newSalidaImpo = new SalidaImpo(req.body);
        await newSalidaImpo.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getSalidaImpoCreadas = async(req, res)=>{
    try { 
        const rows = await SalidaImpo.findAll({
            attributes: [
                'id', 
                'identimpo', 
                [sequelize.literal(`( SELECT guiahouse FROM entradaimpo WHERE id = salidaimpo.identimpo)`),'guiahouse'],
                'tiposalida',
                'fhsalida',
                'agente', 
                'clavepedim',
                'pedimento',
                'numacta' 
            ], 
            where: {estatus: 1}
        })
        res.status(201).json(rows)
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getSalidaImpoById = async(req, res)=>{
    try {
        const row = await SalidaImpo.findOne({
            attributes: [
                'id',
                [sequelize.literal(`( SELECT guiahouse FROM entradaimpo WHERE id = salidaimpo.identimpo)`),'guiahouse'],
                'identimpo',
                'tiposalida',
                'fhsalida',
                'agente',
                'idalmacen',
                'clavepedim',
                'pedimento', 
                'numacta',
                'numoficio',
                'numrecibo', 
                'comentarios',
                'iduser',
                'estatus'
            ], 
            where: {id: req.params.id}
        });
        res.status(200).json(row)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateSalidaImpo = async(req, res)=>{
    try {
        await SalidaImpo.update({  
            tiposalida: req.body.tiposalida, 
            fhsalida: new Date(req.body.fhsalida), 
            agente: req.body.agente,
            idalmacen: req.body.idalmacen, 
            clavepedim: req.body.clavepedim, 
            pedimento: req.body.pedimento,  
            numacta: req.body.numacta, 
            numoficio: req.body.numoficio, 
            numrecibo: req.body.numrecibo,  
            comentarios: req.body.comentarios, 
        },
        { where: {id: req.params.id} });
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const changeStatusSalidaImpo = async(req, res)=>{
    try {
        await SalidaImpo.update({ estatus: req.params.estatus}, {where: {id: req.params.id}});
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}