import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const TipoUsuario = sequelize.define(
  'tipo_usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_tipo_usuario'
    },
    tipoUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_tipo_usuario'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default TipoUsuario;
