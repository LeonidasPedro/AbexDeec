import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Atividade = sequelize.define(
  'atividade',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_atividade'
    },
    atividadeNome: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_atividade'
    },
    atividadeDescricao: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'ds_atividade'
    },
    dataInicio: {
      type: DataTypes.DATEONLY,
      field: 'dt_inicio'
    },
    dataFim: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim'
    },
    quantidadeHoras: {
      type: DataTypes.INTEGER,
      field: 'qt_horas'
    }

  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Atividade;
