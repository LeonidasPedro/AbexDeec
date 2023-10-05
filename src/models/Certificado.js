import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Certificado = sequelize.define(
  'certificado',
  {
    cd_certificado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_certificado'
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
    dt_geracao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'dt_geracao'
    },
    hr_geracao: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'hr_geracao'
    },
    ds_certificado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_certificado'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Certificado;