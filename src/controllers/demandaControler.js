import Demanda from "../models/Demanda";

// Função para inserir uma nova demanda
const create = async (req, res) => {
  try {
    // Extrair os dados da demanda do corpo da requisição
    let { demandaNome, demandaDescricao, quantidadeHoras, quantidadeVagas, dataInicio, dataFim, finalizada, dataCadastro, horaCadastro, dataFimInscricao, usuarioId, imagemId, localizacaoId } = req.body;

    // Criar uma nova demanda com os dados recebidos
    let response = await Demanda.create({
      demandaNome,
      demandaDescricao,
      quantidadeHoras,
      quantidadeVagas,
      dataInicio,
      dataFim,
      finalizada,
      dataCadastro, 
      horaCadastro, 
      dataFimInscricao,
      usuarioId,
      imagemId,
      localizacaoId
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

const get = async (req, res) => {
  try {
      let id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

      if (!id) {
          let response = await Demanda.findAll({
              order: [['id', 'asc']]
          });
          return res.status(200).send({
              type: 'success',
              message: 'Demandas carregadas com sucesso',
              data: response 
          });
      }

      let response = await Demanda.findOne({ where: { id } });

      if (!response) {
          return res.status(200).send({
              type: 'error',
              message: `Nenhuma demanda com id ${id}`,
              data: [] 
          });
      }

      return res.status(200).send({
          type: 'success',
          message: 'Demanda carregada com sucesso',
          data: response 
      });
  } catch (error) {
      return res.status(200).send({
          type: 'error',
          message: 'Ops! Ocorreu um erro',
          error: error.message 
      });
  }
};

const update = async (req, res) => {
  try {
      const id = req.params.id;

      // Verifica se a demanda existe
      const demandaExistente = await Demanda.findOne({ where: { id } });
      if (!demandaExistente) {
          return res.status(404).send({
              type: 'error',
              message: `Demanda com id ${id} não encontrada.`
          });
      }

      // Atualiza a demanda
      const dadosAtualizados = req.body;
      await Demanda.update(dadosAtualizados, { where: { id } });

      // Retorna a demanda atualizada
      const demandaAtualizada = await Demanda.findOne({ where: { id } });
      return res.status(200).send({
          type: 'success',
          message: 'Demanda atualizada com sucesso',
          data: demandaAtualizada
      });

  } catch (error) {
      return res.status(500).send({
          type: 'error',
          message: 'Erro ao atualizar demanda',
          error: error.message
      });
  }
};



export default {
  // ... outros métodos do controller
  create, // Incluir a função create no export para poder ser usada nas rotas
  get,
  update
};
