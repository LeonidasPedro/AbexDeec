import inscricaoDemanda from "../controllers/inscricaoDemanda";

export default (app) => {
    app.post('/inscricaoDemanda/persist', inscricaoDemanda.persist);
}