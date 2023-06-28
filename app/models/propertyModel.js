const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Property = sequelize.define('Property', {
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
        allowNull: false
    },
    
    localisation: {
        type: DataTypes.JSON,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
    image : {
        type: DataTypes.JSON,
    },

    for_rent : {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

    is_available:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

    is_published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    is_deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

});

module.exports = Property;