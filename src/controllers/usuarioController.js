import Usuario from "../models/Usuario";

const get = async (req, res) => {
try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
    let response = await Usuario.findAll({
        order: [['id', 'asc']]
    });
    return res.status(200).send({
        type: 'success',
        message: 'Registros carregados com sucesso',
        data: response 
    });
    }

    let response = await Usuario.findOne({ where: { id } });

    if (!response) {
    return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id}`,
        data: [] 
    });
    }

    return res.status(200).send({
    type: 'success',
    message: 'Registro carregado com sucesso',
    data: response 
    });
} catch (error) {
    return res.status(200).send({
    type: 'error',
    message: `Ops! Ocorreu um erro`,
    error: error.message 
    });
}
}

const persist = async (req, res) => {
try {
    let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;
    
    if (!id) {
    return await create(req.body, res)
    }

    return await update(id, req.body, res)
} catch (error) {
    return res.status(200).send({
    type: 'error',
    message: `Ops! Ocorreu um erro`,
    error: error.message
    });
}
}

const create = async (dados, res) => {
let { usuarioName, usuarioCpf, usuarioEmail, usuarioTelefone, usuarioAtivo } = dados;

let response = await Usuario.create({
    usuarioName,
    usuarioCpf,
    usuarioEmail,
    usuarioTelefone,
    usuarioAtivo
});

return res.status(200).send({
    type: 'success',
    message: `Cadastro realizado com sucesso`,
    data: response 
});
}

const update = async (id, dados, res) => {
let response = await Usuario.findOne({ where: { id } });

if (!response) {
    return res.status(200).send({
    type: 'error',
    message: `Nenhum registro com id ${id} para atualizar`,
    data: [] 
    });
}

Object.keys(dados).forEach(field => response[field] = dados[field]);

await response.save();
return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} atualizado com sucesso`,
    data: response
});
}

const destroy = async (req, res) => {
try {
    let id = req.body.id ? req.body.id.toString().replace(/\D/g, '') : null;
    if (!id) {
    return res.status(200).send({
        type: 'error',
        message: `Informe um id para deletar o registro`,
        data: [] 
    });
    }

    let response = await Usuario.findOne({ where: { id } });

    if (!response) {
    return res.status(200).send({
        type: 'error',
        message: `Nenhum registro com id ${id} para deletar`,
        data: [] 
    });
    }

    await response.destroy();
    return res.status(200).send({
    type: 'success',
    message: `Registro id ${id} deletado com sucesso`,
    data: [] 
    });
} catch (error) {
    return res.status(200).send({
    type: 'error',
    message: `Ops! Ocorreu um erro`,
    error: error.message 
    });
}
}

export default {
get,
persist,
destroy
}
