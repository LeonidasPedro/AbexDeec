import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const TipoUsuario = sequelize.define(
  'tipo_usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'descricao'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default TipoUsuario;