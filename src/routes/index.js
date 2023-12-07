import localizacaoRoute from "./localizacaoRoute";
import certificadoRoute from "./certificadoRoute";
import atividadeRoute from "./atividadeRoute";
import demandaRoute from "./demandaRoute";
import usuarioRoute from "./usuarioRoute";
import tipoUsuarioRoute from "./tipoUsuarioRoute";
import inscricaoDemandaRoute from "./inscricaoDemandaRoute";


function Routes(app)

{
    inscricaoDemandaRoute(app);
    usuarioRoute(app);
    localizacaoRoute(app);
    certificadoRoute(app);
    atividadeRoute(app);
    demandaRoute(app);
    tipoUsuarioRoute(app);
}
export default Routes;