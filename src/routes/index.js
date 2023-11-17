
import userRoute from "./userRoute";
import localizacaoRoute from "./localizacaoRoute";
import certificadoRoute from "./certificadoRoute";
import atividadeRoute from "./atividadeRoute";
import demandaRoute from "./demandaRoute";


function Routes(app)

{
    userRoute(app);
    localizacaoRoute(app);
    certificadoRoute(app);
    atividadeRoute(app);
    demandaRoute(app);
}
export default Routes;