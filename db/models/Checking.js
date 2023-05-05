const { sequelize } = require('../db');
const { DataTypes } = require('sequelize');

const Checking = sequelize.define('checkings', {
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})

module.exports =  Checking ;