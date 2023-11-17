import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const CertificadoModelo = sequelize.define(
  'certificado_modelo',
  {
    modeloId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_modelo'
    },
    documentoDescricao: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'ds_documento'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default CertificadoModelo;