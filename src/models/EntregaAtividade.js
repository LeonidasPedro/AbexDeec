import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const EntregaAtividade = sequelize.define(
  'entrega_atividade',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_entrega_atividade'
    },
    atividadeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_atividade'
    },
    demandaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_demanda'
    },
    inscricaoDemandaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_inscricao_demanda'
    },
    horaCadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'hr_cadastro'
    },
    atividadeEntregue: {
      type: DataTypes.BOOLEAN,
      field: 'sn_entregue'
    },
    dataEntrega: {
      type: DataTypes.DATEONLY,
      field: 'dt_entrega'
    },
    entregaAtraso: {
      type: DataTypes.BOOLEAN,
      field: 'sn_entrega_atraso'
    },
    documentoEntrega: {
      type: DataTypes.TEXT,
      field: 'dc_entrega'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default EntregaAtividade;
