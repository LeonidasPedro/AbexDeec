import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Usuario from "./Usuario";

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

//TipoUsuario.hasMany(Usuario, { foreignKey: 'tipoUsuarioId' });

export default TipoUsuario;
