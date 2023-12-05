import demandaControler from "../controllers/demandaControler";

export default (app) => {
  app.post('/demanda', demandaControler.create);
  app.get('/demanda', demandaControler.get);
  app.get('/demanda/:id', demandaControler.get);
  app.put('/demanda/:id', demandaControler.update);

};