import LineaAerea from "../models/lineasAereas.js";

export const createLineaAerea = async(req, res)=>{
    try {
        const newLineaAerea = new LineaAerea(req.body);
        await newLineaAerea.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllLineaAereas = async (req, res)=>{
    try {
        const LineaAereas = await LineaAerea.findAll();
        res.status(200).json(LineaAereas);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getLineaAereaById = async (req, res)=>{
    try {
        const lineaaerea = await LineaAerea.findByPk(req.params.id)
        res.status(200).json(lineaaerea);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateLineaAerea = async(req, res)=>{
    try {
        await LineaAerea.update(
            {
                nombre: req.body.nombre , 
                tipovuelo: req.body.tipovuelo , 
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

export const deleteLineaAerea = async(req, res)=>{
    try {
        await LineaAerea.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}