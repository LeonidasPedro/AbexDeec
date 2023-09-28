import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const BaseModel = sequelize.define(
  'nome_tabela',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default BaseModel;
