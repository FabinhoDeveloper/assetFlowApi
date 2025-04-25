// Modelo de Workspace do banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Workspace = sequelize.define('Workspace', {
  workspaceName: DataTypes.STRING,
  description: DataTypes.STRING,
  color: DataTypes.STRING,
}, {
    timestamps: false
});

module.exports = Workspace;
