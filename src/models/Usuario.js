import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Usuario = sequelize.define(
  'usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'usuario'
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'cpf'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'email'
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'telefone'
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      field: 'ativo'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Usuario;