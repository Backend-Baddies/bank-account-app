const express = require("express");
const app = express();
const {sequelize} = require("./db");

const port = 3000;



app.get('/savings', async (req, res) => {
    const foundBalanceSav = await Checking.findAll();
    res.json(foundBalanceSav);
})

app.get('/savings', async (req, res) => {
    const transSavAcct = await Checking.findAll();
    res.json(transSavAcct);
})



app.listen(port, () => {
    sequelize.sync();
    console.log("Your server is listening on port" + port);
})

