import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Localizacao = sequelize.define(
  'localizacao',
  {
    cd_localizacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_localizacao'
    },
    ds_logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_logradouro'
    },
    nr_endereco: {
      type: DataTypes.STRING,
      field: 'nr_endereco'
    },
    ds_complemento: {
      type: DataTypes.STRING,
      field: 'ds_complemento'
    },
    ds_bairro: {
      type: DataTypes.STRING,
      field: 'ds_bairro'
    },
    ds_cidade: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_cidade'
    },
    ds_estado: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_estado'
    },
    ds_pais: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_pais'
    },
    ds_cep: {
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
