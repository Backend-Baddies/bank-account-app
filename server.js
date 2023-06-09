const { sequelize } = require('./db/db');
const app = require('./index');

require('dotenv').config();

const PORT = process.env.PORT | 4000;

app.listen(PORT, async () => {
    try {
        sequelize.sync({force:false})
        console.log(`Server listening at port ${PORT}`);
    } catch (err) {
        console.error(err);
    }
});