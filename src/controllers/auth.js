import User from "../models/user.js"
import { Op } from "sequelize";

export const login = async(req, res)=>{
    try {
        const userExist = await User.findOne({ where:{
            [Op.and]: [{ username: req.body.username }, { password: req.body.password }],  
        }})

        if(!userExist) res.status(400).json({msg: "Credenciales invalidas, verifique"});
        else{
            res.status(200).json({user: userExist})
        }

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}