import TipoMercancia from "../models/tipomercancia.js";

export const createTipoMercancia = async(req, res)=>{
    try {
        const newTipoMercancia = new TipoMercancia(req.body);
        await newTipoMercancia.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllTipoMercancias = async (req, res)=>{
    try {
        const tipoMercancias = await TipoMercancia.findAll();
        res.status(200).json(tipoMercancias);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTipoMercanciaById = async (req, res)=>{
    try {
        const tipoMercancia = await TipoMercancia.findByPk(req.params.id)
        res.status(200).json(tipoMercancia);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTipoMercancia = async(req, res)=>{
    try {
        await TipoMercancia.update(
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

export const deleteTipoMercancia = async(req, res)=>{
    try {
        await TipoMercancia.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}