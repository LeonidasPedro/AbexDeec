import User from "../controllers/usuarioController"

export default (app) => {
	app.post('/users/persist', User.persist)
	app.post('/users/persist/:id', User.persist)
	app.post('/users/destroy', User.destroy)
	app.get('/users', User.get)
	app.get('/users/:id', User.get)
}


