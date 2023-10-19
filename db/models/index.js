/** @format */

const  User  = require("./User");
const  Checking  = require("./Checking");
// const { Savings } = require("./Savings");

Checking.belongsTo(User);
User.hasMany(Checking);

// Savings.belongsTo(User);
// User.hasMany(Savings);

// Transactions.belongsTo(Checking);
// Checking.hasMany(Transactions);

// Transactions.belongsTo(Savings);
// Savings.hasMany(Transactions);

module.exports = {
  User,

  // Savings,

  Checking,
  // Transactions,
};
