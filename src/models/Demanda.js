import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Usuario from "./Usuario";

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
    // caso o projeto vá pra frente a gente faz um sistema de upload de imagens, por hora deixo um campo pra um link da web
    // imagemId: {
    //   type: DataTypes.INTEGER,
    //   field: 'cd_imagem'
    // },
    imagemLink: {
      type: DataTypes.STRING,
      field: 'ds_link_imagem'
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

//Demanda.belongsTo(Usuario, { foreignKey: 'usuarioId' });

export default Demanda;
