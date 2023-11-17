import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Usuario = sequelize.define(
  'usuarios',
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_usuario'
    },
    usuarioName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_usuario'
    },
    usuarioCpf: {
      type: DataTypes.STRING,
      field: 'nr_cpf'
    },
    usuarioEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_email'
    },
    usuarioTelefone: {
      type: DataTypes.STRING,
      field: 'nr_telefone'
    },
    usuarioAtivo: {
      type: DataTypes.BOOLEAN,
      field: 'sn_ativo'
    },
    dataCadastro: {
      type: DataTypes.DATEONLY,
      field: 'dt_cadastro'
    },
    tipoUsuarioId: {
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
