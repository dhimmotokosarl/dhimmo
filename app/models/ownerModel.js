const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Owner = sequelize.define('Owner', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    password: {
        type: DataTypes.STRING,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    otp: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    otp_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    image : {
        type: DataTypes.STRING,
        allowNull: true,
    },

    rate : {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },

    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    is_deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

});

module.exports = Owner;