import Localizacao from "../controllers/localizacaoController";

export default (app) => {
    app.post('/localizacao/persist', Localizacao.persist);
    app.post('/localizacao/persist/:id', Localizacao.persist);
    app.post('/localizacao/destroy', Localizacao.destroy);
    app.get('/localizacao', Localizacao.get);
    app.get('/localizacao/:id', Localizacao.get);
}