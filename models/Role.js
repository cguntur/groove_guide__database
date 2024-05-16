const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Member = require('./Member');

class Role extends Model {}

Role.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'role'
  }
);


module.exports = Role;

