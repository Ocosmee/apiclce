import { sequelize } from "../database/config.js";
import SalidaExpo from "../models/salidaexpo.js";

export const createSalidaExpo = async(req, res)=>{
    try {
         
        const newSalidaExpo = new SalidaExpo(req.body);
        await newSalidaExpo.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getSalidaExpoCreadas = async(req, res)=>{
    try { 
        const rows = await SalidaExpo.findAll({ 
            attributes:[
                'id',
                'idexpo',
                [sequelize.literal(`( SELECT guiamaster FROM exportacion WHERE id = salidaexpo.idexpo)`),'guiamaster'],
                'tiposalida',
                'fhsalida',
                'tipotransp',
                'idlineaerea',
                'vuelo',
                'idalmacen',
                'agente',
                'impuesto',
                'clavepedim',
                'pedimento',
                'comentarios',
                'iduser',
                'estatus',
            ],
            where: {estatus: 1}
        })
        res.status(201).json(rows)
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getSalidaExpoById = async(req, res)=>{
    try {
        const row = await SalidaExpo.findOne({  
            where: {id: req.params.id}
        });
        res.status(200).json(row)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateSalidaExpo = async(req, res)=>{
    try {
        await SalidaExpo.update({   
            tiposalida: req.body.tiposalida,
            fhsalida: req.body.fhsalida,
            tipotransp: req.body.tipotransp,
            idlineaerea: req.body.idlineaerea,
            vuelo: req.body.vuelo,
            idalmacen: req.body.idalmacen,
            agente: req.body.agente,
            impuesto: req.body.impuesto,
            clavepedim: req.body.clavepedim,
            pedimento: req.body.pedimento,
            comentarios: req.body.comentarios,   
        },
        { where: {id: req.params.id} });
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const changeStatusSalidaExpo = async(req, res)=>{
    try {
        await SalidaExpo.update({ estatus: req.params.estatus}, {where: {id: req.params.id}});
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
