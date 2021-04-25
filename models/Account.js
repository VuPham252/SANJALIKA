const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./BaseModel');

const account = sequelize.define('Nhom1_Account', {
    // Model attributes are defined here
    UserName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    Pass: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,
});

module.exports = account;
