import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Usuario = sequelize.define(
  'usuarios',
  {
    cd_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_usuario'
    },
    nm_usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_usuario'
    },
    nr_cpf: {
      type: DataTypes.STRING,
      field: 'nr_cpf'
    },
    ds_email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_email'
    },
    nr_telefone: {
      type: DataTypes.STRING,
      field: 'nr_telefone'
    },
    sn_ativo: {
      type: DataTypes.BOOLEAN,
      field: 'sn_ativo'
    },
    dt_cadastro: {
      type: DataTypes.DATEONLY,
      field: 'dt_cadastro'
    },
    cd_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_tipo_usuario'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Usuario;
