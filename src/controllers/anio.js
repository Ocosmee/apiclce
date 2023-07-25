import Anio from "../models/anios.js"; 

export const getAnios = async (req, res)=>{
    try {
        const newAnios = await Anio.findAll();
        res.status(200).json(newAnios);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}