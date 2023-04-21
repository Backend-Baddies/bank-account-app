/** @format */

const { User } = require("./User");
const { Checking } = require("./Checking");
const { Saving } = require("./Saving");

Checking.belongsTo(User);
User.hasMany(Checking);

Saving.belongsTo(User);
User.hasMany(Saving);

module.exports = {
  User,
  Saving,
  Checking,
};
