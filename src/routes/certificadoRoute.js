import Certificado from '../controllers/certificadoController';

export default (app) => {
    app.post('/certificado/persist', Certificado.persist);
    app.post('/certificado/persist/:id', Certificado.persist);
    app.post('/certificado/destroy', Certificado.destroy);
    app.get('/certificado', Certificado.get);
    app.get('/certificado/:id', Certificado.get);
}