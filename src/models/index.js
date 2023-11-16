import Atividade from './Atividade';
import Localizacao from './Localizacao';
import TipoUsuario from './TipoUsuario';
import Usuario from './Usuario';
import Certificado from './Certificado';
import Demanda from './Demanda';
import InscricaoDemanda from './InscricaoDemanda';
import EntregaAtividade from './EntregaAtividade';


(async () => {

    Atividade.sync({ force: true });
    Localizacao.sync({ force: true });
    Usuario.sync({ force: true });
    TipoUsuario.sync({ force: true });
    Certificado.sync({ force: true });
    Demanda.sync({ force: true });
    InscricaoDemanda.sync({ force: true });
    EntregaAtividade.sync({ force: true });
})();    
