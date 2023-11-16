import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const EntregaAtividade = sequelize.define(
  'entrega_atividade',
  {
    cd_entrega_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_entrega_atividade'
    },
    cd_atividade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_atividade'
    },
    cd_demanda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_demanda'
    },
    cd_inscricao_demanda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_inscricao_demanda'
    },
    hr_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'hr_cadastro'
    },
    sn_entregue: {
      type: DataTypes.BOOLEAN,
      field: 'sn_entregue'
    },
    dt_entrega: {
      type: DataTypes.DATEONLY,
      field: 'dt_entrega'
    },
    sn_entrega_atraso: {
      type: DataTypes.BOOLEAN,
      field: 'sn_entrega_atraso'
    },
    dc_entrega: {
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
