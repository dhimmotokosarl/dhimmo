const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Favorite = sequelize.define('Favorite', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});



module.exports = Favorite;