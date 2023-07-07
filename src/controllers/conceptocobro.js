import ConceptoCobro from "../models/conceptocobro.js";

export const createConceptoCobro = async(req, res)=>{
    try {
        const newConceptoCobro = new ConceptoCobro(req.body);
        await newConceptoCobro.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllConceptoCobros = async (req, res)=>{
    try {
        const newConceptoCobros = await ConceptoCobro.findAll();
        res.status(200).json(newConceptoCobros);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getConceptoCobroById = async (req, res)=>{
    try {
        const newConceptoCobro = await ConceptoCobro.findByPk(req.params.id)
        res.status(200).json(newConceptoCobro);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateConceptoCobro = async(req, res)=>{
    try {
        await ConceptoCobro.update(
            {
                nombre: req.body.nombre , 
                cuotaminima: req.body.cuotaminima
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

export const deleteConceptoCobro = async(req, res)=>{
    try {
        await ConceptoCobro.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}