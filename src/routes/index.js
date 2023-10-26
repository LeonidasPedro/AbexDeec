
import userRoute from "./userRoute";
import localizacaoRoute from "./localizacaoRoute";
import certificadoRoute from "./certificadoRoute";
import atividadeRoute from "./atividadeRoute";


function Routes(app)

{
    userRoute(app);
    localizacaoRoute(app);
    certificadoRoute(app);
    atividadeRoute(app);
}
export default Routes;