const { sequelize } = require('./db');

const { Checking, Savings, User } = require('./models');
const { checkingAccounts, savingsAccounts, users } = require('./seedData');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        const userArr = await User.bulkCreate(users);
        const checkingArr = [...checkingAccounts];
        // const savingsArr = [ ...savingsAccounts];

        // userArr.forEach(async (user) => {
        //     const checking1 = await Checking.create(checkingArr.shift());
        //     // const savings1 = await Savings.create(savingsArr.shift());
        //     await user.addChecking(checking1);
        //     // await user.addSaving(savings1);
        // });
    } catch (err) {
        console.error(err);
    }
};

module.exports = seed;
