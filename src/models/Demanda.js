import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const Demanda = sequelize.define(
  'demanda',
  {
    cd_demanda: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'cd_demanda'
    },
    nm_demanda: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'nm_demanda'
    },
    ds_descricao: {
      type: DataTypes.TEXT,
      field: 'ds_descricao'
    },
    qt_horas: {
      type: DataTypes.INTEGER,
      field: 'qt_horas'
    },
    qt_vagas: {
      type: DataTypes.INTEGER,
      field: 'qt_vagas'
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      field: 'dt_inicio'
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim'
    },
    sn_finalizada: {
      type: DataTypes.BOOLEAN,
      field: 'sn_finalizada'
    },
    dt_cadastro: {
      type: DataTypes.DATEONLY,
      field: 'dt_cadastro'
    },
    hr_cadastro: {
      type: DataTypes.TIME,
      field: 'hr_cadastro'
    },
    dt_fim_inscricao: {
      type: DataTypes.DATEONLY,
      field: 'dt_fim_inscricao'
    },
    cd_usuario: {
      type: DataTypes.INTEGER,
      field: 'cd_usuario'
    },
    cd_imagem: {
      type: DataTypes.INTEGER,
      field: 'cd_imagem'
    },
    cd_localizacao: {
      type: DataTypes.INTEGER,
      field: 'cd_localizacao'
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

// Outros modelos seriam definidos aqui, similar ao modelo Demanda...

// Relações
// Demanda.belongsTo(Atividade, { foreignKey: 'cd_atividade' });
// Atividade.hasMany(Demanda, { foreignKey: 'cd_atividade' });

// Demanda.belongsTo(Localizacao, { foreignKey: 'cd_localizacao' });
// Localizacao.hasMany(Demanda, { foreignKey: 'cd_localizacao' });

// // Se a relação com Usuario for One-to-One
// Usuario.hasOne(Demanda, { foreignKey: 'cd_usuario' });
// Demanda.belongsTo(Usuario, { foreignKey: 'cd_usuario' });

// // Se a relação com Usuario for One-to-Many
// Usuario.hasMany(Demanda, { foreignKey: 'cd_usuario' });
// Demanda.belongsTo(Usuario, { foreignKey: 'cd_usuario' });

// // Se houver uma relação Many-to-Many entre Usuario e Demanda
// Usuario.belongsToMany(Demanda, { through: 'InscricaoDemanda' });
// Demanda.belongsToMany(Usuario, { through: 'InscricaoDemanda' });

// // E assim por diante para outras relações...


export default Demanda;
