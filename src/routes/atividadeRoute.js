import Atividade from '../controllers/atividadeController';

export default (app) => {
    app.post('/atividade/persist', Atividade.persist);
    app.post('/atividade/persist/:id', Atividade.persist);
    app.post('/atividade/destroy', Atividade.destroy);
    app.get('/atividade', Atividade.get);
    app.get('/atividade/:id', Atividade.get);
}