import controller from '../controllers/baseController'

export default (app) => {
	app.post('/base/persist', controller.persist)
	app.post('/base/persist/:id', controller.persist)
	app.post('/base/destroy', controller.destroy)
	app.get('/base', controller.get)
	app.get('/base/:id', controller.get)
}