import Almacen from "../models/almacen.js"

export const createAlmacen = async(req, res)=>{
    try {
        const newAlmacen = new Almacen(req.body);
        await newAlmacen.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllAlmacenes = async (req, res)=>{
    try {
        const almacenes = await Almacen.findAll();
        res.status(200).json(almacenes);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAlmacenById = async (req, res)=>{
    try {
        const almacen = await Almacen.findByPk(req.params.id)
        res.status(200).json(almacen);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateAlmacen = async(req, res)=>{
    try {
        await Almacen.update(
            {
                nombre : req.body.nombre,
                rfc: req.body.rfc,
                razonso : req.body.razonso,
                calle : req.body.calle,
                numero : req.body.numero,
                colonia : req.body.colonia,
                municipio : req.body.municipio,
                estado : req.body.estado,
                cp : req.body.cp,
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

export const deleteAlmacen = async(req, res)=>{
    try {
        await Almacen.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}