import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const InscricaoDemanda = sequelize.define(
  'inscricao_demanda',
  {
    cd_inscricao_demanda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_inscricao_demanda'
    },
    cd_demanda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_demanda'
    },
    cd_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_usuario'
    },
    dt_cadastro: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'dt_cadastro'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default InscricaoDemanda;
