import TipoIngreso from "../models/tipoingreso.js";

export const createTipoIngreso = async(req, res)=>{
    try {
        const newTipoIngreso = new TipoIngreso(req.body);
        await newTipoIngreso.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllTipoIngresos = async (req, res)=>{
    try {
        const tipoIngresos = await TipoIngreso.findAll();
        res.status(200).json(tipoIngresos);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getTipoIngresoById = async (req, res)=>{
    try {
        const tipoIngreso = await TipoIngreso.findByPk(req.params.id)
        res.status(200).json(tipoIngreso);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateTipoIngreso = async(req, res)=>{
    try {
        await TipoIngreso.update(
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

export const deleteTipoIngreso = async(req, res)=>{
    try {
        await TipoIngreso.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}