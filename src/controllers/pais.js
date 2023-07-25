import Pais from "../models/pais.js";

export const getPaises = async(req, res)=>{
    try {
        const rows = await Pais.findAll();
        res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}