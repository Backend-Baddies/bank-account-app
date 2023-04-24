const {sequelize} = require('./db')
const {Checking, Savings, User} = require('./models/index')
const {
    checkingAccounts,
    savingsAccounts,
    users,
    transacCheckingAccounts,
    transacSavingsAccounts,
  } = require('./seedData');

describe ("Checking, Savings, and User Models", () => {
    beforeAll(async () => {
        await sequelize.sync({force: true});
    });

    // User testing for CRUD (CREATE)

    test('a User can create a checking account', async () => {
        const userEmail = await User.create(users[2]);
        expect(user.email).toEqual("cruelladv@email.com");
    });


      // User testing for CRUD (READ)
    

    test('a User can check checking account balance', async () => {
        const checkAcctBalance = await Checking.findAll();
        expect(checkAcctBalance[1]).toEqual('32424')
    });

    test('a User can check savings account balance', async () => {
        const savAcctBalance = await Savings.findAll();
        expect(savAcctBalance[0]).toEqual('100000')
    });

    test('a User can check transactions in checking account', async () => {
        const checkAcctTrans = await Checking.findAll();
        expect(checkAcctTrans[3]).toEqual('Transfer from Savings Account +500.00')
    });

    test('a User can check transactions in savings account', async () => {
        const savAcctTrans = await Savings.findAll();
        expect(savAcctTrans[2]).toEqual('Transfer to Checking Account -40,000.80')
    });

    // User testing for CRUD (DELETE)


    //Ask the girls for clarification for this one. 

    test('a User can delete their entire account', async () => {
        const 
        expect('test').toEqual('expectedData')
    });

    test('a User can delete checking account', async () => {
        const foundCheckAcct = await Checking.findAll();
        const deleteCheckAcct = await foundCheckAcct[0].destroy();
        expect(deleteCheckAcct.balance).toEqual('324234234')//Ask for clarification. Do I need to use '.balance' and put the equal to?
    });

    test('a User can delete savings account', async () => {
        const foundSavAcct = await Checking.findAll();
        const deleteSavAcct = await foundSavAcct[0].destroy();
        expect(deleteSavAcct.balance).toEqual('100000')
    });

    test('a User can delete their email', async () => {
        const foundEmail = await User.findAll();
        const deleteEmail = await foundEmail[0].destroy();
        expect(deleteEmail.email).toEqual("john.jackson@email.com")
    });


})