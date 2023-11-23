import tipoUsuarioController from "../controllers/tipoUsuarioController";

export default (app) => {
    app.post('/tipoUsuario/persist', tipoUsuarioController.persist)
    app.post('/tipoUsuario/persist/:id', tipoUsuarioController.persist)
    app.post('/tipoUsuario/destroy', tipoUsuarioController.destroy)
    app.get('/tipoUsuario', tipoUsuarioController.get)
    app.get('/tipoUsuario/:id', tipoUsuarioController.get)
}

