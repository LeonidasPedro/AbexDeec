import demandaControler from "../controllers/demandaControler";

export default (app) => {
  app.post('/demanda', demandaControler.create);

};