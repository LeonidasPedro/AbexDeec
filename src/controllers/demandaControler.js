import Demanda from "../models/Demanda";

// Função para inserir uma nova demanda
const create = async (req, res) => {
  try {
    // Extrair os dados da demanda do corpo da requisição
    let { nm_demanda, ds_descricao, qt_horas, qt_vagas, dt_inicio, dt_fim, sn_finalizada, cd_usuario, cd_imagem, cd_localizacao } = req.body;

    // Criar uma nova demanda com os dados recebidos
    let response = await Demanda.create({
      nm_demanda,
      ds_descricao,
      qt_horas,
      qt_vagas,
      dt_inicio,
      dt_fim,
      sn_finalizada,
      cd_usuario,
      cd_imagem,
      cd_localizacao
    });

    // Enviar resposta de sucesso
    return res.status(200).send({
      type: 'success',
      message: `Demanda cadastrada com sucesso`,
      data: response 
    });

  } catch (error) {
    // Em caso de erro, enviar resposta de erro
    return res.status(500).send({
      type: 'error',
      message: `Ocorreu um erro ao tentar cadastrar a demanda`,
      error: error.message
    });
  }
};

export default {
  // ... outros métodos do controller
  create // Incluir a função create no export para poder ser usada nas rotas
};
