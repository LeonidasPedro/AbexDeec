import controller from '../controllers/usersController';

export default (app) => {
    app.get('/users', controller.getAll);
    app.get('/users/:id', controller.getById);
    app.post('/users', controller.create);
}
