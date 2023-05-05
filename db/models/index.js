/** @format */

const { User } = require("./User");
const { Checking } = require("./Checking");
const { Saving } = require("./Saving");

Checking.belongsTo(User);
User.hasMany(Checking);

Saving.belongsTo(User);
User.hasMany(Saving);

Transactions.belongsTo(Checking);
Checking.hasMany(Transactions);

Transactions.belongsTo(Savings);
Savings.hasMany(Transactions);

module.exports = {
  User,
  Savings,
  Checking,
  Transactions,
};
