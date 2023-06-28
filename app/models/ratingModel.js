const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Rating = sequelize.define('Rating', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    note: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    }

});



module.exports = Rating;