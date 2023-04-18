const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(
    {
        host: "localhost",
        dialect: "mysql",
        username: "root",
        database: "blog",
        logging: console.log,
    }
);
module.exports = sequelize;