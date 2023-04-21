const { database } = require('../db');
const {DataTypes} = require('sequelize');

const Saving = sequelize.define('savings', {
    balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
    }
})

module.exports = {Saving};