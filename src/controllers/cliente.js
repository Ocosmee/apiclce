import Cliente from "../models/clientes.js";

export const createCliente = async(req, res)=>{
    try {
        const newCliente = new Cliente(req.body);
        await newCliente.save();
        res.status(201).json({msg: "Se creo exitosamente"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAllClientes = async (req, res)=>{
    try {
        const newClientes = await Cliente.findAll();
        res.status(200).json(newClientes);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getClienteById = async (req, res)=>{
    try {
        const newCliente = await Cliente.findByPk(req.params.id)
        res.status(200).json(newCliente);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateCliente = async(req, res)=>{
    try {
        await Cliente.update(
            {
                nombre: req.body.nombre,
                contacto: req.body.contacto, 
                rfc: req.body.rfc, 
                email: req.body.email, 
                calle: req.body.calle,
                numero: req.body.numero,
                colonia: req.body.colonia,
                municipio: req.body.municipio,
                estado: req.body.estado,
                cp: req.body.cp,
                celular: req.body.celular, 
                diascredito: req.body.diascredito,
                metodopago: req.body.metodopago,
                nocuenta: req.body.nocuenta 
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

export const deleteCliente = async(req, res)=>{
    try {
        await Cliente.destroy({
            where:{id: req.params.id},
        })

        res.status(200).json({msg: "Se elimino exitosamente!"});

    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}