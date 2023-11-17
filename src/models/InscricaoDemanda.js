import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const InscricaoDemanda = sequelize.define(
  'inscricao_demanda',
  {
   inscricaoDemandaId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_inscricao_demanda'
    },
    demandaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_demanda'
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_usuario'
    },
    dataCadastro: {
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
