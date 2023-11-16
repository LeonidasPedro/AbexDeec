import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Atividade = sequelize.define(
  'atividade',
  {
    cd_atividade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_atividade'
    },
    nm_atividade: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_atividade'
    },
    ds_atividade: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'ds_atividade'
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      field: 'dt_inicio'
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim'
    },
    qt_horas: {
      type: DataTypes.INTEGER,
      field: 'qt_horas'
    }
    // Aqui você adicionaria mais campos conforme necessário
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Atividade;
