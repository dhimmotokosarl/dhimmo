const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Category = sequelize.define('Category', {
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

    fields : {
        type: DataTypes.JSON
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

module.exports = Category;