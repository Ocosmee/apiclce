import { sequelize } from "../database/config.js";
import Exportacion from "../models/exportacion.js";

export const getFolio = async(req, res)=>{
    try {
        const {count} = await Exportacion.findAndCountAll();
        res.status(200).json({rows: count})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createExportacion = async(req, res)=>{
    try {
        const { count } = await Exportacion.findAndCountAll();
        let folio = count + 1;

        req.body.guiamaster = folio +"-"+ req.body.guiamaster;
        req.body.guiahouse  = folio +"-"+ req.body.guiahouse;

        const newExportacion = new Exportacion(req.body);
        await newExportacion.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getExportacionCreadas = async(req, res)=>{
    try { 
        const rows = await Exportacion.findAll({
            attributes: [
                'id', 
                'guiamaster',
                'guiahouse', 
                'fhentalmacen',
                'fhexportacion',
                'idcliente',
                [sequelize.literal(`( SELECT nombre FROM clientes WHERE id = exportacion.idcliente)`),'cliente'],
                'umedida',
                'tipocambio',
                'valormercan',
                'valorpeso'
            ], 
            where: {estatus: 1}
        })
        res.status(201).json(rows)
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getExportacionById = async(req, res)=>{
    try {
        const rows = await Exportacion.findOne({
            attributes: [
                'id',
                'guiamaster',
                'guiahouse',
                'fhentalmacen',
                'fhexportacion',
                'idcliente',
                 [sequelize.literal(`( SELECT nombre FROM clientes WHERE id = exportacion.idcliente)`),'cliente'],
                'avion',
                'idtipomercan',
                'idtipoingr',
                'paisdest',
                'contenido',
                'descripcion',
                'cantbulto',
                'peso',
                'umedida',
                'refrigerar',
                'obs',
                'tipomoneda',
                'tipocambio',
                'valormercan',
                'valorpeso',
                'idlinea',
                'consignatario',
                'consigoriginal',
                'domconsignat',
                'regprevio',
                'fhregprev',
                'ubicacion',
                'iduser',
                'estatus',
            ], 
            where: {id: req.params.id}
        });
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateExportacion = async(req, res)=>{
    try {
        await Exportacion.update({  
            fhentalmacen: req.body.fhentalmacen,
            fhexportacion: req.body.fhexportacion,
            idcliente: req.body.idcliente,
            avion: req.body.avion,
            idtipomercan: req.body.idtipomercan,
            idtipoingr: req.body.idtipoingr,
            paisdest: req.body.paisdest,
            contenido: req.body.contenido,
            descripcion: req.body.descripcion,
            cantbulto: req.body.cantbulto,
            peso: req.body.peso,
            umedida: req.body.umedida,
            refrigerar: req.body.refrigerar,
            obs: req.body.obs,
            tipomoneda: req.body.tipomoneda,
            tipocambio: req.body.tipocambio,
            valormercan: req.body.valormercan,
            valorpeso: req.body.valorpeso,
            idlinea: req.body.idlinea,
            consignatario: req.body.consignatario,
            consigoriginal: req.body.consigoriginal,
            domconsignat: req.body.domconsignat,
            regprevio: req.body.regprevio,
            fhregprev: req.body.fhregprev,
            ubicacion: req.body.ubicacion,  
        },
        { where: {id: req.params.id} });
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const changeStatusExportacion = async(req, res)=>{
    try {
        await Exportacion.update({ estatus: req.params.estatus}, {where: {id: req.params.id}});
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
