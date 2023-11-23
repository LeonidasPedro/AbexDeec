import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Localizacao = sequelize.define(
  'localizacao',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_localizacao'
    },
    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_logradouro'
    },
    endereco: {
      type: DataTypes.STRING,
      field: 'nr_endereco'
    },
    complemento: {
      type: DataTypes.STRING,
      field: 'ds_complemento'
    },
    bairro: {
      type: DataTypes.STRING,
      field: 'ds_bairro'
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_cidade'
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_estado'
    },
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_pais'
    },
    cep: {
      type: DataTypes.STRING,
      field: 'ds_cep'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Localizacao;
