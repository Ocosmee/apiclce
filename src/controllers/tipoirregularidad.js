import TipoIrregularidad from "../models/tipoirregularidades.js";

export const createTipoIrregularidad = async(req, res)=>{
    try {
        const newTipoIrregularidad = new TipoIrregularidad(req.body);
        await newTipoIrregularidad.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllTipoIrregularidads = async (req, res)=>{
    try {
        const tipoIrregularidads = await TipoIrregularidad.findAll();
        res.status(200).json(tipoIrregularidads);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTipoIrregularidadById = async (req, res)=>{
    try {
        const tipoIrregularidad = await TipoIrregularidad.findByPk(req.params.id)
        res.status(200).json(tipoIrregularidad);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTipoIrregularidad = async(req, res)=>{
    try {
        await TipoIrregularidad.update(
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

export const deleteTipoIrregularidad = async(req, res)=>{
    try {
        await TipoIrregularidad.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}