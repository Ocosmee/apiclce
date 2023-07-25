import { sequelize } from "../database/config.js";
import Custodia from "../models/custodia.js";


export const checkAnnioExist = async(req, res)=>{
    try {
        const anioExist = await Custodia.findAll({
            where: { idanio: req.params.idanio}
        })

        if(anioExist.length > 0){
            res.status(400).json({msg: "Ya existen registros con este año, elija otro"})
        }else{
            res.status(204).send("ok")
        }
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createCustodia = async(req, res)=>{
    try { 

        // {
        //     de: req.body.de,
        //     a:  req.body.a, 
        //     unoa7: req.body.a30, 
        //     treinta1a60:  req.body.a60, 
        //     masd60: req.body.masd60,
        //     idanio: req.body.idanio
        // }
        const newCustodia = new Custodia(req.body);
        await newCustodia.save();
        res.status(201).json({msg: "Se creo exitosamente"})
          
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
} 

export const getRowsCustodiaByAnio = async (req, res)=>{
    try {
        const rowsCustodia = await Custodia.findAll({
            where:{
                idanio: req.params.idanio
            }
        })
        res.status(200).json(rowsCustodia);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateRowCustodia  = async(req, res)=>{
    try { 
        await Custodia.update( 
            {
                unoa7: req.params.unoa7, 
                ochoa15: req.params.ochoa15, 
                dieciseisa30: req.params.dieciseisa30,
                segundomes: req.params.segundomes
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

export const getRowsByAnio = async(req, res)=>{
    try {
        const rows = await Custodia.findAll({  
            attributes: [
                'idanio',  
                [sequelize.literal(`( SELECT anio FROM anios WHERE  id = custodia.idanio)`),'anioname']  
            ], 
            group: ['idanio'] 
         });

         res.status(200).json(rows)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteCustodia = async(req, res)=>{
    try {
        await Custodia.destroy({
            where:{idanio: req.params.idanio},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}