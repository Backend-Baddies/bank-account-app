const express = require("express");
const app = express();
const {sequelize} = require("./db");

const port = 3000;

//
app.get('/checking', async (req, res) => {
    const foundBalanceCheck = await Checking.findAll();
    res.json(foundBalanceCheck);
})

app.get('/transacCheckingAccounts', async (req, res) => {
    const transCheckAcct = await Checking.findAll();
    res.json(transCheckAcct);
})





app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port" + port);
})