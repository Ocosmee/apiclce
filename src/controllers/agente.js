import Agente from "../models/agentes.js";

export const createAgente = async(req, res)=>{
    try {
        const newAgente = new Agente(req.body);
        await newAgente.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllAgentes = async (req, res)=>{
    try {
        const agentes = await Agente.findAll();
        res.status(200).json(agentes);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAgenteById = async (req, res)=>{
    try {
        const agente = await Agente.findByPk(req.params.id)
        res.status(200).json(agente);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateAgente = async(req, res)=>{
    try {
        await Agente.update(
            {
                nombre: req.body.nombre , 
                patente: req.body.patente ,  
                calle: req.body.calle ,
                numero: req.body.numero ,
                colonia: req.body.colonia ,
                municipio: req.body.municipio ,
                estado: req.body.estado ,
                cp: req.body.cp ,
                email: req.body.email ,
                celular: req.body.celular 
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

export const deleteAgente = async(req, res)=>{
    try {
        await Agente.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}