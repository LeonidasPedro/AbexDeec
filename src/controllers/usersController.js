import User from "../models/User";



const getAll = async (req, res) => {
    try {
        const response = await User.findAll({
            order: [['id', 'ASC']]
        });
        return res.status(200).send({
            type: 'success', // success, error, warning, info
            message: 'Registros recuperados com sucesso', // mensagem para o front exibir
            data: response // json com informações de resposta
        });
    } catch (error) {
        return res.status(200).send({
            type: 'error',
            message: 'Ops! Ocorreu um erro!',
            data: error
        });
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id }
        });
        return res.json(user);
    }

    catch (error) {
        return res.status(500).json(error);
    }
}


const create = async (data, res) => {
    let { username, email } = data;
  
    let response = await User.create({
        username, email
    });
    return res.status(201).send(response)
  }

export default {
    getAll,
    getById,
    create
}

