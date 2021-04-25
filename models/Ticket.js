const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./BaseModel');

const ticket = sequelize.define('Nhom1_Ticket', {
    // Model attributes are defined here
    TicketName: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    TicketImage: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    Price: {
        type: DataTypes.DECIMAL(20, 2),
        // allowNull defaults to true
    },
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    DayToUse: {
        type: DataTypes.DATE
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

module.exports = ticket;
