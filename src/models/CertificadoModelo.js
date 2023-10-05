import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const CertificadoModelo = sequelize.define(
  'certificado_modelo',
  {
    cd_modelo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_modelo'
    },
    ds_documento: {
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