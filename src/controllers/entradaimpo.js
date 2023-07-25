import { sequelize } from "../database/config.js";
import EntradaImpo from "../models/entradaimpo.js";

export const createEntradaImpo = async(req, res)=>{
    try {
         
        const newEntradaImpo = new EntradaImpo(req.body);
        await newEntradaImpo.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
} 

export const getFolio = async(req, res)=>{
    try {
        const {count} = await EntradaImpo.findAndCountAll();
        res.status(200).json({rows: count})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getEntradaImpoCreadas = async(req, res)=>{
    try { 
        const rows = await EntradaImpo.findAll({
            attributes: [
                'id', 
                'idvuelo', 
                [sequelize.literal(`( SELECT tipovuelo FROM vuelo WHERE  id = entradaimpo.idvuelo)`),'tipovuelo'],
                'guiahouse',
                'fhentalmacen',
                'idcliente',
                [sequelize.literal(`( SELECT nombre FROM clientes WHERE id = entradaimpo.idcliente)`),'cliente'],
                'umedida',
                'tipocambio',
                'valorpeso'
            ], 
            where: {estatus: 1}
        })
        res.status(201).json(rows)
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getEntradaImpoById = async(req, res)=>{
    try {
        const rows = await EntradaImpo.findOne({
            where: {id: req.params.id}
        });
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateEntradaImpo = async(req, res)=>{
    try {
        await EntradaImpo.update({ 
            guiahouse: req.body.guiahouse , 
            fhentaduana: new Date(req.body.fhentaduana),
            fhentalmacen: new Date(req.body.fhentalmacen), 
            idcliente: req.body.idcliente  ,  
            idtipomercan: req.body.idtipomercan  ,
            idtipoingr: req.body.idtipoingr ,
            paisorig: req.body.paisorig ,
            irregularidad: req.body.irregularidad ,
            contenido: req.body.contenido ,
            descripcion: req.body.descripcion ,
            cantbulto: req.body.cantbulto ,
            peso: req.body.peso ,
            umedida: req.body.umedida ,
            tipomoneda: req.body.tipomoneda , 
            tipocambio: req.body.tipocambio ,
            valormercan: req.body.valormercan ,
            valorpeso: req.body.valorpeso ,
            refrigerar: req.body.refrigerar ,
            nombremitent: req.body.nombremitent ,
            domcremitent: req.body.domcremitent ,
            consignatario: req.body.consignatario ,
            domconsignatario: req.body.domconsignatario ,
            regprevio: req.body.regprevio  ,
            fhregprev: new Date(req.body.fhregprev),
            obs: req.body.obs , 
        },
        { where: {id: req.params.id} });
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const changeStatusEntradaImpo = async(req, res)=>{
    try {
        await EntradaImpo.update({ estatus: req.params.estatus}, {where: {id: req.params.id}});
        res.status(200).json({msg: "Se actualizaron los datos!"});
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}