import { Sequelize } from "sequelize";
import 'dotenv/config';
import Certificado from "../models/Certificado";

export const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres',
    }
);
const get = async (req, res) => {
    try {
        let cd_certificado = req.params.cd_certificado ? req.params.cd_certificado.toString().replace(/\D/g, '') : null;

        if (!cd_certificado) {
            let response = await Certificado.findAll({
                order: [['cd_certificado', 'asc']]
            });
            return res.status(200).send({
                type: 'success',
                message: 'Registros carregados com sucesso',
                data: response
            });
        }

        let response = await Certificado.findOne({ where: { cd_certificado } });

        if (!response) {
            return res.status(200).send({
                type: 'error',
                message: `Nenhum registro com cd_certificado ${cd_certificado}`,
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
};
const persist = async (req, res) => {
    try {
        let cd_certificado = req.params.cd_certificado ? req.params.cd_certificado.toString().replace(/\D/g, '') : null;

        if (!cd_certificado) {
            return await create(req.body, res);
        }

        return await update(cd_certificado, req.body, res);
    } catch (error) {
        return res.status(200).send({
            type: 'error',
            message: `Ops! Ocorreu um erro`,
            error: error.message
        });
    }
};
const create = async (dados, res) => {
    let { cd_demanda, cd_usuario, dt_geracao, hr_geracao, ds_certificado } = dados;

    let response = await Certificado.create({
        cd_demanda,
        cd_usuario,
        dt_geracao,
        hr_geracao,
        ds_certificado
    });

    return res.status(200).send({
        type: 'success',
        message: `Cadastro realizado com sucesso`,
        data: response
    });
};
const update = async (cd_certificado, dados, res) => {
    let response = await Certificado.findOne({ where: { cd_certificado } });

    if (!response) {
        return res.status(200).send({
            type: 'error',
            message: `Nenhum registro com cd_certificado ${cd_certificado} para atualizar`,
            data: []
        });
    }

    Object.keys(dados).forEach(field => response[field] = dados[field]);

    await response.save();
    return res.status(200).send({
        type: 'success',
        message: `Registro cd_certificado ${cd_certificado} atualizado com sucesso`,
        data: response
    });
};
const destroy = async (req, res) => {
    try {
        let cd_certificado = req.body.cd_certificado ? req.body.cd_certificado.toString().replace(/\D/g, '') : null;
        if (!cd_certificado) {
            return res.status(200).send({
                type: 'error',
                message: `Informe um cd_certificado para deletar o registro`,
                data: []
            });
        }

        let response = await Certificado.findOne({ where: { cd_certificado } });

        if (!response) {
            return res.status(200).send({
                type: 'error',
                message: `Nenhum registro com cd_certificado ${cd_certificado} para deletar`,
                data: []
            });
        }

        await response.destroy();
        return res.status(200).send({
            type: 'success',
            message: `Registro cd_certificado ${cd_certificado} deletado com sucesso`,
            data: []
        });
    } catch (error) {
        return res.status(200).send({
            type: 'error',
            message: `Ops! Ocorreu um erro`,
            error: error.message
        });
    }
};
export default {
    get,
    persist,
    destroy
};

