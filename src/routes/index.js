import localizacaoRoute from "./localizacaoRoute";
import certificadoRoute from "./certificadoRoute";
import atividadeRoute from "./atividadeRoute";
import demandaRoute from "./demandaRoute";
import usuarioRoute from "./usuarioRoute";


function Routes(app)

{
    usuarioRoute(app);
    localizacaoRoute(app);
    certificadoRoute(app);
    atividadeRoute(app);
    demandaRoute(app);
}
export default Routes;