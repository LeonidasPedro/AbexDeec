import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Localizacao = sequelize.define(
  'localizacao',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'logradouro'
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'endereco'
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'complemento'
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'bairro'
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'cidade'
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'estado'
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'pais'
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'cep'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Localizacao;
