const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
    itemName: DataTypes.STRING,
    category: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    value: DataTypes.STRING,
    assignedTo: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    purchaseDate: DataTypes.DATEONLY,
}, {
    timestamps: false
});

module.exports = Item;
