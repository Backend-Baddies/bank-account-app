const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const usersRouter = require("./routes/users/users.js")
app.use("/users", usersRouter)

app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if (res.statusCode < 400) { res.status(500); }
    res.send({ error: error.message, name: error.name, message: error.message });
});

module.exports = app;
