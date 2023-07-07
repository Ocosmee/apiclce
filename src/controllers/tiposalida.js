import TipoSalida from "../models/tiposalida.js";

export const createTipoSalida = async(req, res)=>{
    try {
        const newTipoSalida = new TipoSalida(req.body);
        await newTipoSalida.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllTipoSalidas = async (req, res)=>{
    try {
        const newTipoSalidas = await TipoSalida.findAll();
        res.status(200).json(newTipoSalidas);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTipoSalidaById = async (req, res)=>{
    try {
        const newTipoSalida = await TipoSalida.findByPk(req.params.id)
        res.status(200).json(newTipoSalida);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTipoSalida = async(req, res)=>{
    try {
        await TipoSalida.update(
            {
                nombre: req.body.nombre , 
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

export const deleteTipoSalida = async(req, res)=>{
    try {
        await TipoSalida.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}