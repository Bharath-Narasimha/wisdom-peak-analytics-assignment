const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Customer = sequelize.define('Customer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: false },
  company: { type: DataTypes.STRING },
}, {
  timestamps: true,
});

Customer.belongsTo(User, { foreignKey: 'userId' });

module.exports = Customer;
