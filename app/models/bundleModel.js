const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Bundle = sequelize.define('Bundle', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    is_deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

});


module.exports = Bundle;