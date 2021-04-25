const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./BaseModel');

const ticketAccount = sequelize.define('Nhom1_TicketAccount', {
    // Model attributes are defined here
    email: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    Id: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
    },
    Amount: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
    },
    DayToUse: {
        type: DataTypes.DATE
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
ticketAccount.removeAttribute('id');
module.exports = ticketAccount;
