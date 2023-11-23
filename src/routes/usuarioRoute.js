import User from "../controllers/usuarioController"

export default (app) => {
	app.post('/usuario/persist', User.persist)
	app.post('/usuario/persist/:id', User.persist)
	app.post('/usuario/destroy', User.destroy)
	app.get('/usuario', User.get)
	app.get('/usuario/:id', User.get)
}


