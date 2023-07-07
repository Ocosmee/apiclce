import TipoDomicilio from "../models/tipodomicilio.js";

export const createTipoDomicilio = async(req, res)=>{
    try {
        const newTipoDomicilio = new TipoDomicilio(req.body);
        await newTipoDomicilio.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllTipoDomicilios = async (req, res)=>{
    try {
        const tipoDomicilios = await TipoDomicilio.findAll();
        res.status(200).json(tipoDomicilios);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTipoDomicilioById = async (req, res)=>{
    try {
        const tipoDomicilio = await TipoDomicilio.findByPk(req.params.id)
        res.status(200).json(tipoDomicilio);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTipoDomicilio = async(req, res)=>{
    try {
        await TipoDomicilio.update(
            {
                nombre: req.body.nombre , 
                descripcion: req.body.descripcion ,  
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

export const deleteTipoDomicilio = async(req, res)=>{
    try {
        await TipoDomicilio.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}