const {sequelize} = require('../db');
const Sequelize = require('sequelize');

const Transaction = sequelize.define('transaction', {
    transacciones: Sequelize.INTEGER
})

module.exports = {Transactions};