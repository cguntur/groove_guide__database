const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Member = require('./Member');
class Contact extends Model {}

Contact.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    address_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    address_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address_2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    member_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:'member',
          key: 'id'
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'contact'
  }
);




module.exports = Contact;