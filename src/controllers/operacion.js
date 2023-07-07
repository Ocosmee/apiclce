import Operacion from "../models/operaciones.js";

export const createOperacion = async(req, res)=>{
    try {
        const newOperacion = new Operacion(req.body);
        await newOperacion.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllOperacions = async (req, res)=>{
    try {
        const operaciones = await Operacion.findAll();
        res.status(200).json(operaciones);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getOperacionById = async (req, res)=>{
    try {
        const operacion = await Operacion.findByPk(req.params.id)
        res.status(200).json(operacion);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateOperacion = async(req, res)=>{
    try {
        await Operacion.update(
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

export const deleteOperacion = async(req, res)=>{
    try {
        await Operacion.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}