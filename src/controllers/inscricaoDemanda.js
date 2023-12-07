import InscricaoDemanda from "../models/InscricaoDemanda";


const persist = async (dados, res) => {
  let { demandaId, usuarioId } = dados;

  let response = await InscricaoDemanda.create({
    demandaId,
    usuarioId
  });

  return res.status(200).send({
    type: 'success',
    message: `Cadastro realizado com sucesso`,
    data: response 
  });
}

export default
{
  persist
}
