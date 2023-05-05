/** @format */

const  User  = require("./User");
const  Checking  = require("./Checking");
// const { Savings } = require("./Savings");

Checking.belongsTo(User);
User.hasMany(Checking);

// Savings.belongsTo(User);
// User.hasMany(Savings);

module.exports = {
  User,
  // Savings,
  Checking,
};
