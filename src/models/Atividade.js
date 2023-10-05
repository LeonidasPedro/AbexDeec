import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Atividade = sequelize.define(
  'atividades',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    materialdeapoio: {
      type: DataTypes.STRING, 
      allowNull: true,
      field: 'materialdeapoio'
    },
    cd_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      field: 'cd_usuario'
    },
    cd_demanda: {
      type: DataTypes.INTEGER,
      allowNull: true, // Isso fica falso quando adicionar a relação
      field: 'cd_demanda'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);



export default Atividade;
