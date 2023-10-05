import Atividade from './Atividade';
import Localizacao from './Localisacao';
import Usuario from './Usuario';

(async () => {

    Atividade.sync({ force: true });
    Localizacao.sync({ force: true });
    Usuario.sync({ force: true });
})();    
