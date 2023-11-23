import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Usuario from "./Usuario"; 
import Demanda from "./Demanda"; 

const Certificado = sequelize.define(
  'certificado',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_certificado'
    },
    demandaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_demanda'
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cd_usuario'
    },
    geracaoHora: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'hr_geracao'
    },
    certificadoDescricao: {
      type: DataTypes.TEXT,
      field: 'ds_certificado'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

Certificado.belongsTo(Demanda, { foreignKey: 'demandaId' });
Certificado.belongsTo(Usuario, { foreignKey: 'usuarioId' });

export default Certificado;
