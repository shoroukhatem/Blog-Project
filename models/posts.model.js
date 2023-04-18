const db = require("../config/db")
const { DataTypes } = require("sequelize");
const Posts = db.define("Posts",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        Title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Body: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true
    }
);


module.exports = Posts
