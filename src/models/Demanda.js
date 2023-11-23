import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Demanda = sequelize.define(
  'demanda',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_demanda'
    },
    demandaNome: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_demanda'
    },
    demandaDescricao: {
      type: DataTypes.TEXT,
      field: 'ds_descricao'
    },
    quantidadeHoras: {
      type: DataTypes.INTEGER,
      field: 'qt_horas'
    },
    quantidadeVagas: {
      type: DataTypes.INTEGER,
      field: 'qt_vagas'
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      field: 'dt_inicio'
    },
    dataFim: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim'
    },
    finalizada: {
      type: DataTypes.BOOLEAN,
      field: 'sn_finalizada'
    },
    dataCadastro: {
      type: DataTypes.DATEONLY,
      field: 'dt_cadastro'
    },
    horaCadastro: {
      type: DataTypes.TIME,
      field: 'hr_cadastro'
    },
    dataFimInscricao: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim_inscricao'
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      field: 'cd_usuario'
    },
    imagemId: {
      type: DataTypes.INTEGER,
      field: 'cd_imagem'
    },
    localizacaoId: {
      type: DataTypes.INTEGER,
      field: 'cd_localizacao'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);


// Relações
// Demanda.belongsTo(Atividade, { foreignKey: 'cd_atividade' });
// Atividade.hasMany(Demanda, { foreignKey: 'cd_atividade' });

// Demanda.belongsTo(Localizacao, { foreignKey: 'cd_localizacao' });
// Localizacao.hasMany(Demanda, { foreignKey: 'cd_localizacao' });

// // Se a relação com Usuario for One-to-One
// Usuario.hasOne(Demanda, { foreignKey: 'cd_usuario' });
// Demanda.belongsTo(Usuario, { foreignKey: 'cd_usuario' });

// // Se a relação com Usuario for One-to-Many
// Usuario.hasMany(Demanda, { foreignKey: 'cd_usuario' });
// Demanda.belongsTo(Usuario, { foreignKey: 'cd_usuario' });

// // Se houver uma relação Many-to-Many entre Usuario e Demanda
// Usuario.belongsToMany(Demanda, { through: 'InscricaoDemanda' });
// Demanda.belongsToMany(Usuario, { through: 'InscricaoDemanda' });

// // E assim por diante para outras relações...


export default Demanda;
