const db = require("../config/db")
const { DataTypes } = require("sequelize")
const users = db.define("Users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                is: ["^[a-z]+$", 'i'],
                is: ["^[A-Z]+$", 'i']
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isEmail: true }
        }
        , Role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isIn: [["basic", "premium", "admin"]] }
        }
    },
    {
        timestamps: false
    }
);

module.exports = users