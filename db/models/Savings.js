const { sequelize } = require('../db');
const {DataTypes} = require('sequelize');

const Savings = sequelize.define('savings', {
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    }
})

module.exports = {Savings};