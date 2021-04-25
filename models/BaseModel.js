const Sequelize = require('sequelize');

const sequelize = new Sequelize('QuangHoa', 'sa', 'z@GH7ytQ', {
    host: '118.70.125.210',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;