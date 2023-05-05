const {sequelize} = require('../db');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.INTEGER
})

module.exports = User;
