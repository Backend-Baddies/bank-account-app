const express = require('express');
const router = express.Router();
// const User = require('../../db/models/User.js');
// const Checking = require('../../db/models/Checking.js')
const { User, Checking } = require('../../db/models/index.js');


    
    router.get("/", async (req, res, next) => {
        try {
            const users = await User.findAll();
            res.send(users);
        } catch (error) {
            next(error);
        }
    });

    router.get("/:id/checking", async (req, res, next) => {
       
            try {
                const id = req.params.id;
                console.log(id);
                const user = await User.findByPk(id);
                console.log(user);
                const checking = await Checking.findOne({ where: { userId: user.id } });
                console.log(checking);
                res.send({ balance: checking.balance });
            } catch (error) {
                next(error);
            }
        });
  

router.post("/:id/checking", async (req, res, next) => {

    try {
        const id = req.params.id;
        console.log("2nd id", id);
        const user = await User.findByPk(id);
        console.log("2nduser", user);
        console.log(user.id);
        const checking = await Checking.create({
            accountNumber: Math.floor(Math.random() * 1000000),
            balance: 0,
        
        });
     await user.addChecking(checking);
        res.send(checking);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("3rd id", id);
        const user = await User.findByPk(id);
        console.log("3rd user", user);

        await user.destroy(1);
        res.send("User deleted");
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try{ 
        const id = req.params.id;
        const user = await User.findByPk(id);
        await user.update(req.body)
        res.send("User updated")
    } catch (error) {
        next(error);
    }

})


module.exports = router;
