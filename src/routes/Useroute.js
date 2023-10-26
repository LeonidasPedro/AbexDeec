import User from "../controllers/UserController"

export default (app) => {
	app.post('/base/persist', User.persist)
	app.post('/base/persist/:id', User.persist)
	app.post('/base/destroy', User.destroy)
	app.get('/base', User.get)
	app.get('/base/:id', User.get)
}